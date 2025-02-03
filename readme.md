<!--
	TODO
	diagram of components and stuff,
	guidance for what's important and what can be tossed
	
-->

# <h1 style="text-align:center">Veracity TTRPG</h1>

+ Characters have HP, Facets, and two slot-based inventories.
+ Other miscellaneous properties & abilities are described on the sheet in natural language, under "other features".
## Inventories.
+ Characters have two slot-based inventories (Light + Flesh). They can have at most 18 Light & 18 Flesh slots.
+ Fill and unlock your slots from lowest to highest.
+ Characters start with 4 Flesh slots, 4 Light slots, and 4 slots to assign freely.
\
&nbsp;
+ Flesh slots are for physical objects, such as Evidence, Means, & Wounds.
    + Evidence.
        + Evidence is any item that is being carried to support the truthfulness of a Secret.
    + Means.
        + Means are any item that is worth at least a day's Room & Board (R&B), or is a large or unusual tool.
	    + Coinage should tracked in bundles worth a day's R&B. Handwave insubstantial amounts.
    + Wounds.
        + Wounds are damage to your body.
        + Remove 1 Wound each time you spend a full day resting in a safe area with access to medical treatment.
    + Other inconsequential items should be grouped in kits as Means, or handwaved.
\
&nbsp;
+ Light slots are for mental objects, such as Secrets, Ruses, & Stress.
    + Secrets.
        + Secrets are a critical resource. They are social weapons, and revealing them is the only way to level up. 
        + When your character hears something that sounds secret, ask the other players (including the referee), if it sounds like a Secret. If they agree, add it to a Light slot with an appropriate description.
		+ Secrets must be the truth, and characters must have reasonable grounds to believe they are. If something is known to be false, even metatextually, it can't be a Secret. 
        + Each character can only learn a given Secret once, and once a Secret is revealed by anyone, it's just news.
        + If you didn't convert a secret to a Secret: your character didn't believe it or consider it important, revealing it can't level them up.
		+ What makes a Secret?
			+ Secrets are the atomic components of a conspiracy. Not all hidden information is a secret, something becomes a secret when someone wants to keep it hidden i.e.
			+ "There's a spoon hidden behind a loose brick." Weird. Not a secret.
			+ "There's a knife hidden behind a loose brick. The count hid it there long ago, he killed his elder brother to inherit his father's domain." A secret.
		<!--
			Secrets are intended as a storygame-type mechanic that produces a "setup scene, payoff scene" structure.
			First, you learn about the secret, and the characters must discuss it in order to add it to their inventory.
			Then, later, you must discuss it again in order to expose it. 
			However, secrets are a double-edged sword: a weak secret takes up light slots and is hard to remove, makes it easier to hit max stress and break.
		
			Secrets are the atomic components of a conspiracy. Not all hidden information is a secret, something becomes a secret when someone wants to keep it hidden i.e.
			"There's a spoon hidden behind a loose brick.": Weird. Not a secret.
			"There's a knife hidden behind a loose brick. The count hid it there long ago, he killed his elder brother to inherit his father's domain.": A secret.
			
			All powers-that-be have skeletons in their closet. If you want to level up you will have to challenge the status quo.
		-->
    + Ruses.
        + A Ruse represents a deliberate untruth that you're maintaining.
		+ Add it to a Light slot when you start to maintain the Lie, remove it when you stop.
		+ If you lie without holding a matching Ruse, you must succeed a Light Save or it fails to be convincing.
    + Stress.
        + You gain Stress for acting against a Facet (see Facets), and violating social Convention (see Combat & Initiative). Enemies and hostile environments may also inflict Stress.
        + Remove 1 Stress each time you spend a full day relaxing in daylight.
## Saves.
+ When you attempt to do something for which the outcome is uncertain, the referee may call for a Save.
+ Roll a d20, lower is better. The rules & referee may add a modifier to represent the difficulty of tasks.
+ Calculate the total after modifiers. On a 0 or lower, you succeed. On an 19+ you fail. Otherwise, look at the corresponding slot:
    + If it requires mental effort, look at your Light.
    + If it requires physical effort, look at your Flesh.
\
&nbsp;		
+ If the slot is empty you succeed, otherwise you fail.
\
&nbsp;
<br><br><table>
		<thead>
			<tr><th colspan=2tr>Common Dif Modifiers</th></tr>
			<!--<tr><th>Cause</th><th>Stress Gain</th><tr>-->
			<!--<tr><td>rejected Facet</td><td>+ Facet die roll</td></tr>-->
        </thead>
		<tbody>
			<tr>
				<td>appropriate tool</td>
				<td>-5</td>
			</tr>
			<tr>
				<td>this is your only chance</td>
				<td>-5</td>
			</tr>
			<!--<tr><td>kill a person or attempt to (1/scene)</td><td>+d4 Stress, unless commanded by an external power or sociopathic (PCs cannot be sociopaths)</td></tr>-->
		</tbody>
    </table><!--the gain should always be +1, or +d-something, don't do +2,+3,... A stressor of that magnitude should create uncertainty.-->
## Levelling Up.
+ Each time a PC shocks an NPC by revealing Secrets (optionally supported by Evidence), they gain a slot (Light or Flesh, your choice).
+ Each Secret and Evidence can only be used in this way once, and each revelation must be greater than the last.
+ The target does not have to believe you to be shocked. If they are both shocked & convinced they are likely to become a permanent ally.
## Facets.
+ A Facet is a short phrase that relates to your character's behaviour. i.e.
    + Profession: "Blacksmith", "Doctor".
    + Personality Trait: "Calm", "Cruel".
    + Ideology: "Obey the Gods", "Anarchist".
    + More Abstract: "Violence", "Opium Cravings".
+ Each Facet has an associated die size ∈ {d4, d6, d8 d10, d12}. This corresponds to its prominence.
\
&nbsp;
+ Whenever a save is made (by anyone in the scene) as a consequence of acting on one of your Facets, roll the die and modify the difficulty by the total, in your favor.
+ However, whenever your character acts counter to one of their Facets, gain Stress equal to a roll of the die. i.e. a "Cruel" character acts nice to someone.
\
&nbsp;
+ Characters start with one d6 Facet and can have up to four.
+ Your character can gain additional Facets by acting in accordance with the new hypothetical Facet.
	+ This typically requires a concerted effort over one or two sessions.
	+ The referee should decide any mechanics on a case-by-case-basis. i.e. random percentage chance, fill a clock, complete a quest or task.
+ When your character take an extreme action (Referee's judgement) for or against a Facet, you may modify the facet's die size (increase or decrease, as appropriate).
+ d4 Facets can be replaced, given appropriate fictional positioning.
## Disablement & Death.
+ Characters die when their Flesh slots are entirely full of Wounds.
+ If a character gains stress with empty Light slots, but not enough to fit all the Stress, the remaining Stress is disgregarded.
+ If they gain Stress with no free Light slots, they Break:
    + The first time: They lose their will to seek. They can no longer level up.
    + Subsequently:	They suffer a heart attack: add d20 Wounds.
+ They then remove all Stress.
## Convention.
<!--My former o5r campaign Wormwood was intended to be about challenging conspiracies and other systems of control, and a key feature of those systems is that parts of them exist in your head. When I ran it in 5e I found that the rules failed to evoke this aspect. It was very easy to walk over the social conventions. They had no fangs. The only counter was intense physical security, which came across as a clear escalation and made the systems seem overtly sinister. There was no escalation. I wanted a gradual ramp-up as the characters become more comfortable breaking societal norms to reveal the conspiracy, that's what the interaction of stress and light levelling is intended to achieve.-->
+ During a social situation, the referee declares any relevant aspects of social Convention. Characters that violate a Convention gain Stress.
+ The Conventions should be displayed in a way that makes them clear to the whole table, and can be modified at any time. i.e. the situation changes, the referee realizes they made an error.
+ If, upon a player declaring an action, the referee realizes that it would violate a previously unspoken Convention. That Convention is added to the list, and the player may cancel the action so it does not occur.		
+ Examples of Convention: never swear at this posh dinner (+1), never question the gods (+d4), always wear clothes (1/scene, +d6).
\
&nbsp;
<br><br><table>
		<thead>
			<tr><th colspan=2tr>Examples of Causes of Stress</th></tr>
			<!--<tr><th>Cause</th><th>Stress Gain</th><tr>-->
			<!--<tr><td>rejected Facet</td><td>+ Facet die roll</td></tr>-->
        </thead>
		<tbody>
			<tr>
				<td>social attack i.e. insult or threat</td>
				<td>variable, Referee's judgement</td>
			</tr>
			<tr>
				<td>flee a social conflict without enemy's consent</td>
				<td>+1</td>
			</tr>
			<tr>
				<td>shocked by reveal of Secret</td>
				<td>+d6</td>
			</tr>
			<tr>
				<td>own compromising Secret revealed</td>
				<td>fill all empty slots with Stress</td>
			</tr>
			<!--<tr><td>kill a person or attempt to (1/scene)</td><td>+d4 Stress, unless commanded by an external power or sociopathic (PCs cannot be sociopaths)</td></tr>-->
		</tbody>
    </table><!--the gain should always be +1, or +d-something, don't do +2,+3,... A stressor of that magnitude should create uncertainty.-->
## Initiative & Combat.
+ If you can't take any more Stress, your can give up, or go to blows.
\
&nbsp;
+ Characters start with 0 HP, it is granted by protective equipment & magical means. They regain all HP at the end of each scene.
+ Damage usually reduces HP. In some cases Damage inflicts an equal number of Wounds instead: when the target is immobilised, unsuspecting, or has 0 HP.
+ If the outcome of an attack is uncertain, the defender is always the one to Save.
<!--this causes combat to accelerate as the death spiral takes hold. it also adds uncertainty at higher levels of play: information--, difficulty++-->
\
&nbsp;
+ A turn lasts a minute. Each turn, each character can move (20 ft by default), and spend AP. By default, characters have AP equal to their number of Flesh slots. They regain all AP at the start of each turn.
+ Example actions: make an attack (4 AP), reveal a secret (4 AP), pick up or drop something (4 AP), fall or stand from prone (2 AP), draw or stow something (0 AP).
+ The referee decides the AP cost of other actions.
\
&nbsp;
+ Initiative is side-based. On the players' turn, move clockwise around the table. The leader of the player party makes a Light Save: on a success the players act first, on a fail the NPCs do.
+ Surprise.
	+ Each side's first turn is the surprise turn. Damage dealt on an attacker's first turn bypasses HP.
	+ If a character is visible to the enemy when initiative is determined, they cannot act during their side's first turn.
\
&nbsp;
+ Fleeing combat requires a clear path to escape, and a successful Flesh Save.

---

## Guidance for Referees
+ What is core to the system, and what can be trivially changed?
	1. The core is the level up system. If this is removed, I wouldn't really consider it the same game.
	2. TODO comment on Facets & Control Systems
	3. The choice of stats are important because Light supports the two afforemention systems.
		+ Adding more stats shouldn't be too distruptive.
		+ But if you remove Light or Flesh, it'd take a bit of work to ensure that pts 1 & 2 are still in place.
	4. The combat rules are designed to be simple, they could be swapped out with little impact.
+ When should something deal damage, vs Wounds?.
	+ Wounds should be inflicted whenever HP loss wouldn't contribute drain resources.
	+ A common example would be environmental damage i.e. traps and falls.
	+ I recommend d6 dmg per 20-ft fallen, but of course it depends.
+ The rules are asking if something true? How do I know if something is true?
	+ This is really a broader issue that I can't help you with. Consult your people's records.
+ An example scenario is available at https://github.com/tetragrade/frostbearer