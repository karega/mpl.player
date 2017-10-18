/* constants.js */

const badgeBronze = require('./../assets/badge-bronze.png');
const badgeSilver = require('./../assets/badge-silver.png');
const badgeGold = require('./../assets/badge-gold.png');
const badgeHof = require('./../assets/badge-hof.png');

export const badgeMap = {
	'bronze': badgeBronze,
	'silver': badgeSilver,
	'gold': badgeGold,
	'hof': badgeHof,
}

const icnDefense = require('./../assets/icn-def.png');
const icnDnf = require('./../assets/icn-dnf.png');
const icnGc = require('./../assets/icn-gc.png');
const icnPnBh = require('./../assets/icn-pnbh.png');
const icnSs = require('./../assets/icn-ss.png');

const skillDef = require('./../assets/skill-def.png');
const skillDnf = require('./../assets/skill-dnf.png');
const skillGc = require('./../assets/skill-gc.png');
const skillPnBh = require('./../assets/skill-pnbh.png');
const skillSc = require('./../assets/skill-sc.png');
const skillSs = require('./../assets/skill-ss.png');
const skillPs = require('./../assets/skill-ps.png');

export const skillMap = {
	'Passing & Ball Handling': skillPnBh,
	'Rebounding': skillGc,
	'Shot Creating': skillSc,
	'3 Point Shooting': skillSs,
	'Driving & Finishing': skillDnf,
	'Defending': skillDef,
	'Post Scoring': skillPs,
}

const skillDefP = require('./../assets/skill-def-p.png');
const skillDnfP = require('./../assets/skill-dnf-p.png');
const skillGcP = require('./../assets/skill-gc-p.png');
const skillPnBhP = require('./../assets/skill-pnbh-p.png');
const skillScP = require('./../assets/skill-sc-p.png');
const skillSsP = require('./../assets/skill-ss-p.png');
const skillPsP = require('./../assets/skill-ps-p.png');

export const primarySkillMap = {
	'Passing & Ball Handling': skillPnBhP,
	'Shot Creating': skillScP,
	'Rebounding': skillGcP,
	'3 Point Shooting': skillSsP,
	'Driving & Finishing': skillDnfP,
	'Defending': skillDefP,
	'Post Scoring': skillPsP,
}

const skillDefS = require('./../assets/skill-def-s.png');
const skillDnfS = require('./../assets/skill-dnf-s.png');
const skillGcS = require('./../assets/skill-gc-s.png');
const skillPnBhS = require('./../assets/skill-pnbh-s.png');
const skillScS = require('./../assets/skill-sc-s.png');
const skillSsS = require('./../assets/skill-ss-s.png');
const skillPsS = require('./../assets/skill-ps-s.png');

export const secondarySkillMap = {
	'Passing & Ball Handling': skillPnBhS,
	'Shot Creating': skillScS,
	'Rebounding': skillGcS,
	'3 Point Shooting': skillSsS,
	'Driving & Finishing': skillDnfS,
	'Defending': skillDefS,
	'Post Scoring': skillPsS,
}
