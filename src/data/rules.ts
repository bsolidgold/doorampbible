export interface RuleNode {
  text: string;
  children?: RuleNode[];
}

export interface RuleSubsection {
  id: string;
  heading?: string;
  intro?: string;
  items: RuleNode[];
}

export interface RuleSection {
  id: string;
  title: string;
  intro?: string;
  subsections: RuleSubsection[];
}

export const currentRules: RuleSection[] = [
  {
    id: "s1",
    title: "Section 1 — Pop Ups/Live Balls & Rebounding",
    intro:
      "A pop up is the action required to make the ball live. A ball if half-live when the ball is possessable by the player's hands, but not scorable such as during inbounding.",
    subsections: [
      {
        id: "s1-1",
        heading: "1.1 — How to Pop Up",
        items: [
          { text: "Before a legal pop up the ball must have touched the tramp on a play" },
          {
            text: "The ball must come down onto someone's knee or head otherwise an up and up penalty takes place",
            children: [
              { text: "If a ball is headed down an up and down penalty is called which has the same effect as an up and up" },
            ],
          },
          { text: "The ball must come up to be popped up. For example a ball cannot rest on someone's knee or head and be popped up" },
          { text: "When a ball is kicked off the dome, it is a live ball." },
        ],
      },
      {
        id: "s1-2",
        heading: "1.2 — Maintaining a Live Ball",
        items: [
          { text: "As soon as a ball touches the ground, it is dead and has to be made live again to be possessed by a player's hands" },
          { text: "Once a ball is live it is anyone's ball and can be taken by anyone on either team" },
          {
            text: "The ring on the tramp and dome act as reboundable surfaces and the ball maintains live status after hitting them as long as it was already live.",
            children: [
              { text: "It is still possessable by player's hands if it is half live, but not scorable because the ball has to touch the tramp before it can be scored." },
            ],
          },
          { text: "Unique courts have variable reboundable surfaces. For example, the ball's live off the bricks at the BDT's court." },
        ],
      },
    ],
  },
  {
    id: "s2",
    title: "Section 2 — Forwarding",
    subsections: [
      {
        id: "s2-1",
        heading: "2.1 — Forwarding Lines",
        intro:
          "A forwarding line is an imaginary boundary/line of scrimmage established when a player gains possession of a live ball. The line is parallel to the top bar of the goal from a bird's-eye view. The forwarding line determines the location from which that player may legally attempt a shot.",
        items: [{ text: "Forwarding only applies if the ball goes in on a shot a player forwarded on." }],
      },
      {
        id: "s2-2",
        heading: "2.2 — Establishing a Forwarding Line",
        items: [
          { text: "When a player gains possession of a live ball, their forwarding line is established by the position of their furthest forward foot towards the dome at the moment they touch the ground after possessing the ball." },
          {
            text: "If a player gains possession of the ball and is already on the ground the furthest foot closest to the dome is the forwarding line.",
            children: [
              { text: "A player is not allowed to propel their forwarding line forward by taking \"steps\" (2 jumps with each jump using a different foot). Differential timings of foot landings is okay as long as the landing is natural and is not timed differently intentionally." },
              { text: "If a player decides to land with one foot, that is the foot which establishes the forwarding line" },
            ],
          },
          { text: "If possession of a ball is gained mid-air the furthest foot that lands towards the dome marks the forwarding line" },
          { text: "Forwarding lines are created any time a player receives a new live ball. For example, receiving a pass & rebounding establish new forwarding lines even if a pass moves your forwarding line backwards." },
          { text: "Forwarding lines are for individual players" },
          { text: "If a player tips up a ball in an attempt to gain possession, this does not count as their first possession and therefore does not establish a forwarding line" },
        ],
      },
      {
        id: "s2-3",
        heading: "2.3 — Forwarding Line Restrictions",
        items: [
          {
            text: "A player may cross their own forwarding line during play; however, they may not score a shot while positioned in front of their forwarding line.",
            children: [
              { text: "Players are allowed to shoot over the forwarding line by jumping over the line and shooting the ball mid-air, but their last jump has to be from behind the line." },
            ],
          },
          { text: "Scoring a shot from in front of the forwarding line results in a Forwarding penalty, and makes the point invalid. The other team also gains possession of the ball" },
          { text: "If a player puts the ball into their legs while it is live, they are allowed to \"forward\" only if they attempt a Spens 2." },
        ],
      },
    ],
  },
  {
    id: "s3",
    title: "Section 3 — Bobbling & Explosions",
    subsections: [
      {
        id: "s3-1",
        heading: "3.1 — Definition of Bobbling",
        intro: "Bobbling is the primary method by which a player may maintain possession while moving throughout the court.",
        items: [
          { text: "Grounds during bobbling only apply if a player is possessing a ball with their hands." },
          { text: "A player may not possess the ball with their hands and touch the ground at the same time otherwise grounding is called, unless permitted by an explosion. All shots, passes, and controlled possession of the ball with a player's hands must occur while the player is airborne." },
        ],
      },
      {
        id: "s3-2",
        heading: "3.2 — Bobbling Procedure",
        items: [
          { text: "A player must toss the ball in the air in a way for them to avoid touching the tramp and the ball at the same time whilst jumping" },
          { text: "If a player makes contact with the trampoline or ground while also possessing the ball with their hands, a Grounding penalty is called, unless the action qualifies as a legal explosion." },
          { text: "If a player loses possession of a ball mid bobble, they are allowed to \"ground\" while recovering the ball, but must resume their bobble and/or explode immediately after." },
        ],
      },
      {
        id: "s3-3",
        heading: "3.3 — Explosions",
        intro: "An explosion is a special action that allows a player to release and regain possession of the ball to avoid having the offense do an awkward and unfair first bobble, but also allows the defense a chance to attack at the ball.",
        items: [
          {
            text: "To explode a player must release the ball and regrab it when gaining possession of a ball or ending a bobble in a let-go grab motion.",
            children: [
              { text: "When ending a bobble the let go grab has to be done on the way down and allows the offense to grab the ball while on the ground to typically transition into their shooting motion" },
            ],
          },
          { text: "Explosions only have to be done on the way down of a jump and permit a player to touch the ball whilst on the ground." },
          { text: "If a player gains possession of a ball while on the ground and on their way up they do not have to do an explosion and can legally possess the ball on the ground for that brief moment." },
          { text: "A player's shooting motion also counts as an explosion" },
        ],
      },
      {
        id: "s3-4",
        heading: "3.4 — Official Interpretation",
        items: [
          { text: "Officials determine whether a player's action qualifies as a legal bobble, explosion, or grounding violation. All rulings should prioritize maintaining continuous play, preventing unfair advantages, and preserving the intended movement system of Dooramp." },
        ],
      },
    ],
  },
  {
    id: "s4",
    title: "Section 4 — Scoring & the Redirection Rule",
    subsections: [
      {
        id: "s4-1",
        heading: "4.1 — How to Score",
        items: [
          { text: "The ball must completely pass through the designated triangle marked by the towels for a point to count." },
          { text: "Shots that bounce in count for as many points as the shot is worth except for shots that bounce off of the tramp itself." },
          { text: "To score the player must come from the tramp such as on shots where players come off the tramp. They need both feet to come from the tramp so in instances where the offense has one foot off the tramp out of bounds, and one on the tramp, they cannot pick up the out of bounds foot and be considered coming from the tramp." },
        ],
      },
      {
        id: "s4-2",
        heading: "4.2 — 1 Pointers / Standard Shots",
        items: [
          { text: "A basic basketball shot on a live ball done with your hands is a one pointer. Same applies for if a ball is smacked/tipped in as long as it abides with the redirection rule." },
        ],
      },
      {
        id: "s4-3",
        heading: "4.3 — 2 Pointers",
        items: [
          { text: "Hitting a live ball off any part of your body other than your hands and the ball goes in is 2 points as long as your hands touched the ball on the same possession of your shot (drop kicking a ball is 2 points)" },
          { text: "Holding the ball in between your legs and throwing it into the dome with your legs is also 2 points" },
        ],
      },
      {
        id: "s4-4",
        heading: "4.4 — 3 Pointers",
        items: [
          { text: "3 pointers can be attempted on live balls" },
          {
            text: "Scoring the ball off any part of your body other than a BDT is 3 points as long as your hands have not touched the ball on the same possession of the shot",
            children: [
              { text: "If a player passes a live ball and it is three point shot in by the receiving player before it touches their hands, it is three points" },
            ],
          },
        ],
      },
      {
        id: "s4-5",
        heading: "4.5 — Butt Shot Victory Rule",
        items: [
          { text: "If a player successfully scores a ball off their butt with 3-point status, the victory is instantly awarded to the team who scored the butt shot." },
          { text: "The ball has to hit any part of a player's cheeks to count as going off their butt" },
        ],
      },
      {
        id: "s4-6",
        heading: "4.6 — The Redirection Rule",
        items: [
          {
            text: "For a shot to count as more than one point the ball has to be redirected off the 2 or 3 point surface (ex. head)",
            children: [{ text: "Redirection is judged by the officials" }],
          },
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "Section 5 — Free Throws",
    subsections: [
      {
        id: "s5-main",
        items: [
          { text: "To attempt a legal free throw the player has to jump off the tramp, release the ball mid-air and land off the back of the tramp" },
          { text: "2 and 3 point attempts are possible during free throws but the shot has to occur while the player is mid-air, same rules above apply" },
          { text: "During free throws, non-shooting players must stand outside the apex of the tramp (the furthest points left and right away from the court)" },
          { text: "Free throws are awarded through a 3, 2, 1 system where 3 penalties awards a free throw, then 2 penalties after that, then every penalty awards another free throw." },
          { text: "Fouls, NP's, & Technical Fouls all count towards the free throw system" },
          { text: "For fouls, the player who is fouled 3 times shoots the free throw. In the case of 3 techs or NPs the shooting team gets to pick who takes the shot on their team" },
        ],
      },
    ],
  },
  {
    id: "s6",
    title: "Section 6 — Inbounding",
    subsections: [
      {
        id: "s6-1",
        heading: "6.1 — Determining First Possession",
        items: [
          {
            text: "At the beginning of a Dooramp game, first possession is determined by a designated free throw attempt. If the shot goes in, the shooting team gains the ball. If it is missed, the non-shooting team gets the ball",
            children: [
              { text: "This does not count for points and only determines the initial possession" },
              { text: "Other players must allow for the shooter to attempt a rebound if they miss the shot, to then try to score as if it were a live ball in play (this also does not count for points and still only determines possession). Otherwise, it is interference and the shooting team gains the ball" },
            ],
          },
          {
            text: "If Benny Buckets is playing, the Ben rule applies and Ben gets the starting possession",
            children: [{ text: "It's important that Ben is the one to start the play and not just his team" }],
          },
        ],
      },
      {
        id: "s6-2",
        heading: "6.2 — Possession Changes",
        items: [
          { text: "When possession changes during a game, the team gaining possession begins with the ball off of the trampoline to then attempt an inbound for their team." },
          { text: "Possession changes if a team commits a penalty or a team scores, and the other team gains the ball to inbound." },
        ],
      },
      {
        id: "s6-3",
        heading: "6.3 — Inbounding Procedure",
        intro: "During an inbound players can:",
        items: [
          { text: "Pass the ball to a teammate who is on the tramp" },
          { text: "Bring the ball on themselves" },
          { text: "Pass to a teammate off the tramp" },
          {
            text: "When inbounding, players may possess the ball with their hands and even bobble, but a score cannot happen until the ball has touched the tramp. The same logic of a live ball applies, but a score cannot occur.",
            children: [{ text: "The tramp is considered either the mat or the springs. Ring does not count as part of the tramp" }],
          },
          { text: "Players must bobble on their first jump if inbounding a ball with possession in their hands" },
        ],
      },
      {
        id: "s6-4",
        heading: "6.4 — Inbounding Specifics",
        items: [
          { text: "If a pass to a teammate off the tramp crosses the plane of the tramp (any area above the trampoline) and the pass is dropped, the other team is awarded the ball" },
          { text: "If a ball is out of play while on the ground during an inbound, and is kicked to the tramp it is allowed to be grabbed by a player's hand as long as it does not touch the tramp. The same logic applies to a bounce pass inbound." },
          { text: "Players are allowed to enter the tramp plane with the ball and throw the ball out of bounds before they land to maintain a ball's inbound status" },
          { text: "Players are allowed to maintain inbound status by standing on the trampoline ring as long as they do not touch part of the tramp." },
          { text: "Technical fouls can be awarded if officials determine a player is waiting to inbound (had viable inbound opportunities and ignores them with the intent of delaying the game for no reason)" },
        ],
      },
      {
        id: "s6-5",
        heading: "6.5 — Legal Defensive Moves",
        items: [
          { text: "Defensive players are allowed to intercept inbound attempts as long as they come from the tramp and do so mid-air" },
          { text: "Passes that enter the tramp plane can be possessed by any player and intercepted by the defense" },
        ],
      },
    ],
  },
  {
    id: "s7",
    title: "Section 7 — Out of Bounds",
    subsections: [
      {
        id: "s7-main",
        items: [
          { text: "If the ball ever touches outside the tramp on the ground after being inbounded, the team that it did not go out of bounds on is awarded the ball to inbound." },
          {
            text: "If a ball goes out of bounds it can be saved by anyone through 2 processes",
            children: [
              { text: "A player has part of a foot touching the black of the tramp and pulls the ball back on the tramp with anything other than their hands, typically their other foot" },
              { text: "A player jumps off the tramp and hits the ball back on the tramp while mid-air." },
            ],
          },
          { text: "Players who make contact with the ball off the tramp, on the ground, and after a ball has been inbounded are out of bounds/grounded and the other team is awarded the ball" },
          { text: "When the ball leaves the plane of the tramp and has touched the ground, players from the team the ball is not out on are allowed to kick the ball away and retain inbounding possession even if they are on the tramp as long as the ball does not re-enter the plane of the tramp." },
          {
            text: "Any time the ball goes out of bounds on a team, the other team is allowed to gain possession of the ball at any time unless the ball comes back inbound",
            children: [
              { text: "Players whose ball it is cannot grab an out of bounds ball with their hands if they are in contact with the tramp. They can grab it mid-air as long as they land off the tramp" },
            ],
          },
          {
            text: "Players are allowed to jump while out of bounds to possess a ball as long as they only touch the ball while in the air",
            children: [
              { text: "They are only allowed one bobble from out of bounds" },
              { text: "If they do not come from the tramp (ex. being off the tramp and jumping to get a rebound and passing it back on the tramp) the ball has to be re-popped before it can be scored again. The ball essentially gains the status of a ball that has been freshly inbounded." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "s8",
    title: "Section 8 — Penalties",
    intro: "Anytime a penalty occurs, the team that did not commit the penalty is awarded the ball to inbound. In the case of fouls, NPs, and technical fouls, they count towards free throws as described in the free throw section. Other penalties do not. When a team commits a penalty, the other team can decline a penalty and resume play.",
    subsections: [
      {
        id: "s8-1",
        heading: "8.1 — Grounding",
        intro: "Grounding is called if any of these apply:",
        items: [
          { text: "A player bobbles illegally or does not explode" },
          {
            text: "A player is in a down position on the tramp (laying or kneeling) and makes contact with the ball",
            children: [{ text: "When saving a ball that's out of bounds players can be in down positions while saving it until the ball enters the plane of the tramp." }],
          },
          { text: "A player possesses a ball whilst out of bounds and on the ground" },
          { text: "If 2 players on other teams are in a fight for possession of the ball there is no grounding, and bobbling only has to start once one of them has clear possession." },
          { text: "A player possesses the ball on the tramp with their hands and does not attempt to jump." },
          { text: "If a player's bounce is being stolen whilst bobbling they are allowed to touch the tramp and possess the ball with their hands at the same time, but they must make an attempt to jump." },
        ],
      },
      {
        id: "s8-2",
        heading: "8.2 — Fouls",
        items: [
          { text: "Rules apply for NBA fouls and FIFA fouls typically depending on if the ball is live/not live unless stated otherwise" },
          { text: "Officials are able to determine whether any action is considered a foul" },
          { text: "Fouls count towards free throws" },
          { text: "Throwing the ball at players on the other team with intent to harm them, unless attempting to ground the player, is considered a foul" },
          {
            text: "Intentionally flinging a player on the other team is a foul. Intentionally flinging players on your own team is a penalty",
            children: [{ text: "Intentionally cracking down a player is also illegal" }],
          },
          { text: "If a player is knowingly fouled and decides to shoot or play anyway the foul is remitted/declined" },
          { text: "In the case of moving screens, a screen is allowed to move if the screen's movement is done only by the force of the tramp, or is shoved by another player who does not intend to move the screen." },
          { text: "Because of the smaller court size, screens do not have to give the screened player(s) as much space as the NBA, but must still give space to avoid sudden contact/injury, and must allow players to remain on the black." },
        ],
      },
      {
        id: "s8-3",
        heading: "8.3 — Technical Fouls",
        items: [
          { text: "Technical fouls are awarded by officials and any action can be deemed a technical foul by the officials/referees" },
          { text: "Players cannot call each other's technical fouls." },
        ],
      },
      {
        id: "s8-4",
        heading: "8.4 — Hands",
        items: [
          { text: "Hands is anytime a player intentionally uses their hands on the ball while it is not live" },
          { text: "A BDT is anytime a player hands the ball accidentally. This does not count as a hand and play resumes as normal. The ball still goes to the other team even if it went out of bounds on a BDT" },
        ],
      },
      {
        id: "s8-5",
        heading: "8.5 — NPs (No Pointers)",
        items: [
          {
            text: "An NP is any action where a player hits the ball out of bounds purposefully with the intent to delay the game, or the player has defensive intent but hands the ball on purpose (smacking the ball away before someone pops it up).",
            children: [{ text: "Committing a hands while blocking a shot is not an NP." }],
          },
        ],
      },
      {
        id: "s8-6",
        heading: "8.6 — Fan Interference",
        intro: "The team which is negatively affected by fan interference is awarded the ball, usually to start a new play, or is awarded goaltending based on the fan interference.",
        items: [
          { text: "Whenever a non-player makes any meaningful contact (determined by players or officials) with the ball, players, tramp, or meaningfully moves the dome affecting play, fan interference is called." },
          { text: "Contact does not have to be made for fan interference as long as the interference is meaningful and affects the game. Typically the officials will make non-contact calls." },
        ],
      },
    ],
  },
  {
    id: "s9",
    title: "Section 9 — Goaltending & 1 Bobble Rule",
    intro: "Goaltending is an illegal defensive move that awards the offense 1 or 2 points based on the value of the shot.",
    subsections: [
      {
        id: "s9-1",
        heading: "9.1 — Basic Goaltending",
        items: [
          { text: "Standing in between the dome and the tramp in the designated goaltending zone and being hit by a shot is goaltending." },
          { text: "Players can still be goaltended in the red area if their body interferes with a shot's natural line towards the dome." },
          {
            text: "For a legal block the defense has to have both feet on the black if blocking on the ground. If you block a shot mid-air you must have both feet start on the black and end on the black on your jump",
            children: [
              { text: "You are allowed to fall out of bounds after blocking as long as both feet landed on the black" },
            ],
          },
          { text: "The defense is allowed to jump off the tramp and intercept or block for passes or non-shots in the goaltending zone, but it has to be deemed a non-shot." },
          { text: "There is no goaltending on 3 pointers or the butt in" },
          {
            text: "If a player is attempting to block a 3 pointer whilst in the goaltending zone or red area and the ball still goes in, it's 3 points for the shooting team even if the defense is out of bounds and even if the defense hits the ball with their hands, unless the ball is intentionally redirected into the dome by the defense",
            children: [
              { text: "If the defense intentionally redirects the ball into the goal it is not 3 points, and is out of bounds/grounding on the defense." },
              { text: "If possession of a blocked 3 pointer occurs and drops the ball into the goal, it is not 3 points because possession was already gained." },
            ],
          },
          { text: "If a shot hits a goaltending defensive player, but the shot's trajectory is not towards the dome (the ball would not hit the dome if it was a straight line horizontal wise — vertical does not matter) there is no goaltending." },
          { text: "Offensive players cannot goaltend." },
        ],
      },
      {
        id: "s9-2",
        heading: "9.2 — Following the Offense",
        items: [
          { text: "If the offensive player comes off the tramp to shoot, the defense is permitted to follow them parallel to the direction the offense jumped or towards the offensive player." },
          { text: "If the defense's line is not parallel or towards the offensive player and has you jump more towards the dome, blocking would be goaltending." },
          { text: "Blocks do not have to be done mid-air to negate goaltending in this circumstance as long as you follow the path of the offense" },
          { text: "If a defensive player happens to already be off the tramp when the offense jumps off, the jump path is determined by drawing a line from the closest point of the black to the dome to the position of the defensive player" },
        ],
      },
      {
        id: "s9-3",
        heading: "9.3 — The One Bobble Rule",
        items: [
          { text: "Anytime the defense intercepts a ball from the offense in which the ball moved towards the dome, the defense must bobble once or pass before they are allowed to shoot." },
          { text: "For a full bobble/full jump to occur, the defense has to retouch the ground after blocking" },
          { text: "A player is allowed to negate a 1 bobble by shooting a 3 pointer to intercept a shot. The 1 bobble violation is absent because the defense never intercepted the ball with their hands." },
        ],
      },
    ],
  },
];

export const ruleHistory: RuleSection[] = [
  {
    id: "h-game-court",
    title: "Game/Court",
    subsections: [
      {
        id: "h-game-court-main",
        items: [
          { text: "A standard game is a 2v2, goes to 7 points, and is won by 2." },
          { text: "The court is set up with an inground trampoline, and a dome 4 feet away from the tramp." },
          { text: "The goal is a downward facing triangle on the front of the dome, and is marked with towels around the crossbars." },
          { text: "The standard tramp size is 14 feet, the standard crossbar is 34 inches, and the standard ball is a size 3, Umbro ball." },
          { text: "Touching the top of the padding is considered being on the tramp." },
        ],
      },
    ],
  },
  {
    id: "h-points",
    title: "Points",
    subsections: [
      {
        id: "h-points-main",
        items: [
          { text: "To score, the ball has to fully pass the crossbars on the dome." },
          { text: "You can't score until the ball hits the tramp, and is in play." },
          { text: "There are 1, 2, and 3 pointers. A one pointer is a basic shot off the hand. 2 points is off any part of your body, but your hand hits the ball first right before you shoot it. Additionally, holding the ball between your legs and throwing the ball into the dome with your legs is 2 points. A 3-pointer is off any part of your body, and it does not hit your hand before the shot." },
          { text: "If the offense passes to their teammate who heads the ball in without touching it with their hands, it is three points." },
          { text: "Additionally, there is an instant game-winner. It happens the same as a 3, except you butt it in, ending the game immediately." },
        ],
      },
    ],
  },
  {
    id: "h-game-starting",
    title: "Game Starting/Play Ending",
    subsections: [
      {
        id: "h-game-starting-main",
        items: [
          { text: "To start a play, a player starts off the tramp." },
          { text: "From here, they can bring the ball on their own, or pass to their teammate." },
          { text: "Once the offense is on the tramp after starting a play, they cannot leave the tramp with the ball." },
          { text: "If their teammate is off the tramp, the pass crosses the black, and the teammate drops it, it is the other team's ball." },
          { text: "The defense can come off the tramp at the start of a play." },
          { text: "A pass can be intercepted by the defense to give them possession, but they have to jump off the tramp to intercept and intercept before touching the ground." },
          { text: "The offense can immediately begin bobbling if they bring on the ball, pass to a teammate on the tramp, or bring the ball on to get a quick knee." },
          { text: "The offense cannot shoot with their hands until the ball is popped up." },
          { text: "If the ball goes off the tramp on the ground, the opposite team of who it was out on can grab the ball at any time to start a new play." },
          { text: "If the ball was out on your team, you can have a foot touching the black of the tramp to pull the ball back on." },
          { text: "You could also jump off the tramp with a foot ending on the black, and kick it on mid-air." },
          { text: "A ball can be kicked off something out of bounds to get a more preferable spot to save it." },
          { text: "The defense can kick the ball away with assurance they will have possession, until the ball touches the top of the padding." },
        ],
      },
    ],
  },
  {
    id: "h-live-balls",
    title: "Live Balls",
    subsections: [
      {
        id: "h-live-balls-main",
        items: [
          { text: "A ball becomes live when it comes off the knee or the head, and bounces up. This is known as popping it up." },
          { text: "Holding the ball between your legs, above your knees makes it a live ball." },
          { text: "When popped up, you can legally grab the ball with your hands." },
          { text: "When the ball hits the ground, it becomes dead." },
          { text: "If a ball is shot and bounces off of the dome it can be saved. If you touch the ground off the tramp, you have to catch the ball mid air, and you can pass it to your teammate who's on the tramp, or bobble back on the tramp and re-knee or head." },
          { text: "If you jump off the tramp, and catch the ball mid air without hitting the ground, you can shoot instead of passing." },
          { text: "If the offense shoots, and the ball rebounds, the defense has to wait for the ball to die before picking it up to switch position. If the ball stays off the tramp after a rebound, they can't grab it." },
        ],
      },
    ],
  },
  {
    id: "h-bobbling",
    title: "Bobbling",
    subsections: [
      {
        id: "h-bobbling-main",
        items: [
          { text: "After you grab the ball when it's live, you have to immediately pass, shoot, or bobble." },
          { text: "The defense can attempt to take a bobble at any time." },
          { text: "To bobble, the player must release the ball on their way down on a jump, so the defense has the opportunity to steal it." },
          { text: "If the defense is taking your bounce, you can bobble without leaving the tramp as long as you release the ball on your way down." },
          { text: "You gain a free jump before and after you end your bobble, but you must either let go and grab the ball with both hands, or just hold the ball with one hand to give the defense a chance to grab it." },
          { text: "If you catch a pass mid-air you have to bobble the same jump that you catch it." },
          { text: "You can bobble off of the tramp, but coming back on the tramp requires the ball to be popped up again before you shoot. It's just like bringing the ball onto the tramp at the start of a play. This only applies if you start a bobble off the tramp, and end it off the tramp, so only hitting the ground once does not require it to be popped up again." },
        ],
      },
    ],
  },
  {
    id: "h-goaltending",
    title: "Goaltending/1 Bobble Rule",
    subsections: [
      {
        id: "h-goaltending-main",
        items: [
          { text: "If a defender goaltends, the appropriate points is granted to the offense based off the shot." },
          { text: "A defender has to start with both feet on the black, and end with both feet on the black after blocking a shot unless the offense jumps forward or sideways off the tramp, giving the defender permission to jump backward parallel or toward the offense." },
          { text: "If a shot is grabbed, the defense has to bobble once before shooting it. Otherwise, this is a point for the offense. For this to count, the defense has to hit the tramp once if they catch it mid-air, or hit the tramp twice if they catch it on the ground." },
          { text: "Goaltending does not apply to 3-pointers, but if a defensive player hands the ball to block the shot, it is goaltending. The same is true with Spens 2-pointers." },
          { text: "If the defense is standing in between the tramp and the dome while blocking the goal, and is hit with the ball with a 1 or 2-pointer, it's goaltending." },
        ],
      },
    ],
  },
  {
    id: "h-forwarding",
    title: "Forwarding",
    subsections: [
      {
        id: "h-forwarding-main",
        items: [
          { text: "The forwarding line is a line established after someone pops up the ball." },
          { text: "The offense cannot shoot past the forwarding line, but they can jump over the forwarding line, and release the ball mid-air." },
          { text: "The furthest foot closest to the dome after touching a live ball with your hands marks where the forwarding line is." },
          { text: "If you catch a live ball mid-air, the furthest foot that lands is the forwarding line, but you cannot use your back foot to boost your forwarding line." },
          { text: "Catching a pass moves the forwarding line, whether you pass backwards or not." },
          { text: "Forwarding does not apply to 3-pointers, or Spens 2-pointers." },
        ],
      },
    ],
  },
  {
    id: "h-fouls-ft",
    title: "Fouls/Free Throws",
    subsections: [
      {
        id: "h-fouls-ft-main",
        items: [
          { text: "Fouls are granted the same way as basketball." },
          { text: "Every 3 times a player is fouled, they get a free throw." },
          { text: "Free throws are done at the back of the tramp. The offense may jump over the back to shoot before they land. The other team picks a defender to line up perpendicular at the apex of the tramp to block the shot. The defense jumps forward upon release to try to block the shot." },
          { text: "And1 is not in Dooramp. If a player is fouled and makes the shot, there is no foul." },
          { text: "A free throw can be rebounded to resume normal play." },
          { text: "Intentionally flinging someone on the other team is a foul." },
        ],
      },
    ],
  },
  {
    id: "h-rebounds",
    title: "Rebounds",
    subsections: [
      {
        id: "h-rebounds-main",
        items: [
          { text: "If a ball bounces off the dome, it can be rebounded." },
          { text: "If you jump off the tramp, and grab a rebound mid-air, you can shoot it." },
          { text: "If you start off the tramp, and grab a rebound mid-air, you can only pass it in." },
          { text: "If a ball is bouncing around the crossbars, you can hit it in to get a point for yourself as long as you're in mid-air, and come directly from off the tramp. You can score a 2 or 3-pointer like this." },
        ],
      },
    ],
  },
  {
    id: "h-grounding",
    title: "Grounding",
    subsections: [
      {
        id: "h-grounding-main",
        items: [
          { text: "Grounding changes the ball's possession." },
          { text: "If a player touches the ball, while considering what would be down in football, it is grounding." },
          { text: "Waiting on the tramp while grabbing a ball is grounding unless 2 players on opposite teams are fighting for the ball. Once one of them gains possession, they have to act." },
          { text: "If you pause after grabbing a live ball, it's grounding." },
        ],
      },
    ],
  },
  {
    id: "h-bdts",
    title: "BDT's",
    subsections: [
      {
        id: "h-bdts-main",
        items: [
          { text: "You can accidentally hand the ball, as long as the ball's path is not drastically changed." },
          { text: "Handing the ball changes possession." },
          { text: "BDT stands for Big Dangly Thing." },
          { text: "You cannot BDT a ball into the goal for points." },
          { text: "BDTing the ball is not considered touching it with your hands." },
        ],
      },
    ],
  },
];
