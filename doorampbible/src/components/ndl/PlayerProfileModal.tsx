"use client";

import Image from "next/image";
import { Player } from "@/data/players";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PlayerProfileModalProps {
  player: Player | null;
  open: boolean;
  onClose: () => void;
}

export function PlayerProfileModal({ player, open, onClose }: PlayerProfileModalProps) {
  if (!player) return null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-ndl-secondary border-ndl-surface text-ndl-text max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Image
              src={player.photo}
              alt={player.name}
              width={72}
              height={72}
              className="rounded-lg border-2 border-ndl-surface object-cover"
            />
            <div>
              <DialogTitle className="font-heading font-black text-xl uppercase tracking-wide text-ndl-text">
                {player.name}
              </DialogTitle>
              <span
                className={`text-xs font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  player.status === "active"
                    ? "bg-green-900/50 text-green-400"
                    : "bg-red-900/50 text-ndl-accent"
                }`}
              >
                {player.status}
              </span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {[
            { label: "Nicknames", value: player.nicknames },
            { label: "About", value: player.description },
            { label: "Accolades", value: player.accolades },
          ].map(({ label, value }) => (
            <div key={label}>
              <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-ndl-accent mb-1">
                {label}
              </h3>
              <p className="text-sm text-ndl-muted leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
