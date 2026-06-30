"use client";

import { type BracketData } from "@/data/winterdomes";

// Layout constants
const MW = 130;   // match box width
const MH = 46;   // match box height
const SH = 23;   // slot height (MH / 2)
const BSH = 70;  // base slot height — vertical unit for round-0 matches
const RG = 50;   // round gap (horizontal space for connector lines)
const MX = 8;    // left margin
const MY = 28;   // top margin (includes round label space)
const CHAMP_W = 145; // width reserved for champion text

// NDL colour palette
const C = {
  bg:       "#16213e",
  border:   "#0f3460",
  text:     "#eaeaea",
  muted:    "#a0a0a0",
  accent:   "#DC2626",
  winBg:    "rgba(220,38,38,0.10)",
  gold:     "#D4AF37",
  note:     "#f59e0b",
};

function trunc(s: string, n = 14): string {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

// y-centre of match mIdx in round rIdx (0 = first/largest round)
function cy(rIdx: number, mIdx: number): number {
  return MY + (mIdx + 0.5) * Math.pow(2, rIdx) * BSH;
}

// left x of match boxes in round rIdx
function bx(rIdx: number): number {
  return MX + rIdx * (MW + RG);
}

interface MatchBoxProps {
  match: BracketData["rounds"][number]["matches"][number];
  x: number;
  y: number;
}

function MatchBox({ match, x, y }: MatchBoxProps) {
  const tw = match.winner === match.top.name;
  const bw = match.winner === match.bottom.name;
  const hw = !!match.winner;

  return (
    <g>
      {/* Box */}
      <rect x={x} y={y} width={MW} height={MH} fill={C.bg} stroke={C.border} strokeWidth={1} rx={3} />

      {/* Winner highlights */}
      {tw && <rect x={x + 1} y={y + 1} width={MW - 2} height={SH - 1} fill={C.winBg} rx={2} />}
      {bw && <rect x={x + 1} y={y + SH + 1} width={MW - 2} height={SH - 1} fill={C.winBg} rx={2} />}

      {/* Divider */}
      <line x1={x} y1={y + SH} x2={x + MW} y2={y + SH} stroke={C.border} strokeWidth={1} />

      {/* ── Top slot ── */}
      {match.top.seed !== undefined && (
        <text x={x + 6} y={y + SH - 6} fontSize={9} fill={C.muted} fontFamily="monospace">
          {match.top.seed}
        </text>
      )}
      <text
        x={x + (match.top.seed !== undefined ? 18 : 8)}
        y={y + SH - 6}
        fontSize={11}
        fill={hw && !tw ? C.muted : C.text}
        fontWeight={tw ? "700" : "400"}
        fontFamily="system-ui,sans-serif"
      >
        {trunc(match.top.name)}
      </text>
      {match.top.note && (
        <text x={x + MW - 4} y={y + SH - 6} fontSize={8} fill={C.note} textAnchor="end" fontFamily="system-ui">
          {match.top.note}
        </text>
      )}

      {/* ── Bottom slot ── */}
      {match.bottom.seed !== undefined && (
        <text x={x + 6} y={y + MH - 6} fontSize={9} fill={C.muted} fontFamily="monospace">
          {match.bottom.seed}
        </text>
      )}
      <text
        x={x + (match.bottom.seed !== undefined ? 18 : 8)}
        y={y + MH - 6}
        fontSize={11}
        fill={hw && !bw ? C.muted : C.text}
        fontWeight={bw ? "700" : "400"}
        fontFamily="system-ui,sans-serif"
      >
        {trunc(match.bottom.name)}
      </text>
      {match.bottom.note && (
        <text x={x + MW - 4} y={y + MH - 6} fontSize={8} fill={C.note} textAnchor="end" fontFamily="system-ui">
          {match.bottom.note}
        </text>
      )}

      {/* Score */}
      {match.score && (
        <text x={x + MW - 4} y={y + SH - 1} fontSize={9} fill={C.accent} textAnchor="end" fontWeight="700" fontFamily="system-ui">
          {match.score}
        </text>
      )}
    </g>
  );
}

interface BracketViewProps {
  bracket: BracketData;
  champion?: string;
}

export function BracketView({ bracket, champion }: BracketViewProps) {
  const { rounds } = bracket;
  const nR = rounds.length;
  const n1 = rounds[0].matches.length; // number of first-round matches

  const svgH = 2 * MY + n1 * BSH;
  const svgW = MX + nR * MW + (nR - 1) * RG + RG / 2 + (champion ? CHAMP_W : 20);

  return (
    <div className="overflow-x-auto rounded-lg bg-ndl-primary border border-ndl-surface p-3">
      {bracket.note && (
        <p className="text-[11px] text-ndl-muted italic mb-3">{bracket.note}</p>
      )}
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        width={svgW}
        height={svgH}
        style={{ maxWidth: "100%" }}
      >
        {/* ── Round labels ── */}
        {rounds.map((round, rIdx) => (
          <text
            key={`lbl-${rIdx}`}
            x={bx(rIdx) + MW / 2}
            y={13}
            fontSize={9}
            fill={C.muted}
            textAnchor="middle"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="1"
          >
            {round.name.toUpperCase()}
          </text>
        ))}

        {/* ── Connector lines ── */}
        {rounds.slice(0, -1).map((_, rIdx) =>
          rounds[rIdx + 1].matches.map((_, nmi) => {
            const rx = bx(rIdx) + MW;
            const midX = rx + RG / 2;
            const nx = bx(rIdx + 1);
            const y1 = cy(rIdx, nmi * 2);
            const y2 = cy(rIdx, nmi * 2 + 1);
            const yn = cy(rIdx + 1, nmi);
            return (
              <g key={`conn-${rIdx}-${nmi}`}>
                <line x1={rx} y1={y1} x2={midX} y2={y1} stroke={C.border} strokeWidth={1.5} />
                <line x1={rx} y1={y2} x2={midX} y2={y2} stroke={C.border} strokeWidth={1.5} />
                <line x1={midX} y1={y1} x2={midX} y2={y2} stroke={C.border} strokeWidth={1.5} />
                <line x1={midX} y1={yn} x2={nx} y2={yn} stroke={C.border} strokeWidth={1.5} />
              </g>
            );
          })
        )}

        {/* ── Champion connector + label ── */}
        {champion && (() => {
          const fr = nR - 1;
          const fcy = cy(fr, 0);
          const fx = bx(fr) + MW;
          const cx2 = fx + RG / 2;
          return (
            <g>
              <line x1={fx} y1={fcy} x2={cx2} y2={fcy} stroke={C.gold} strokeWidth={1.5} />
              <text x={cx2 + 7} y={fcy - 9} fontSize={9} fill={C.gold} fontWeight="700"
                fontFamily="system-ui,sans-serif" letterSpacing="0.5">
                CHAMPION
              </text>
              <text x={cx2 + 7} y={fcy + 7} fontSize={13} fill={C.gold} fontWeight="700"
                fontFamily="system-ui,sans-serif">
                {champion}
              </text>
            </g>
          );
        })()}

        {/* ── Match boxes ── */}
        {rounds.map((round, rIdx) =>
          round.matches.map((match, mIdx) => (
            <MatchBox
              key={`m-${rIdx}-${mIdx}`}
              match={match}
              x={bx(rIdx)}
              y={cy(rIdx, mIdx) - MH / 2}
            />
          ))
        )}
      </svg>
    </div>
  );
}
