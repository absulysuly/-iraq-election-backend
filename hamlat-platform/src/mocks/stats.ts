import { DashboardStats, GovernorateParticipation } from '../types';

export const mockDashboardStats: DashboardStats = {
  totalRegisteredVoters: 21500000,
  expectedTurnoutPercentage: 67.5,
  turnoutChangeLastWeek: 2.3,
  approvedCandidatesCount: 3247,
  verifiedViolationsCount: 12,
  newViolationsChangeLastWeek: -3,
  greenCampaignImpact: {
    treesSaved: 45230,
    paperPostersSaved: 1250000,
    co2EmissionsReducedKg: 89400
  },
  candidateDistribution: {
    men: { count: 2598, percentage: 80 },
    women: { count: 649, percentage: 20 }
  }
};

export const mockGovernorateParticipation: GovernorateParticipation[] = [
  { governorateId: 'bgd', governorateName: 'Baghdad', estimatedTurnout: 72.3 },
  { governorateId: 'bsr', governorateName: 'Basra', estimatedTurnout: 68.9 },
  { governorateId: 'nin', governorateName: 'Nineveh', estimatedTurnout: 65.4 },
  { governorateId: 'arb', governorateName: 'Erbil', estimatedTurnout: 71.8 },
  { governorateId: 'naj', governorateName: 'Najaf', estimatedTurnout: 69.5 },
  { governorateId: 'krb', governorateName: 'Karbala', estimatedTurnout: 70.2 },
  { governorateId: 'anb', governorateName: 'Anbar', estimatedTurnout: 58.3 },
  { governorateId: 'dhi', governorateName: 'Dhi Qar', estimatedTurnout: 64.7 },
  { governorateId: 'may', governorateName: 'Maysan', estimatedTurnout: 62.1 },
  { governorateId: 'bab', governorateName: 'Babylon', estimatedTurnout: 66.8 },
  { governorateId: 'was', governorateName: 'Wasit', estimatedTurnout: 63.4 },
  { governorateId: 'sal', governorateName: 'Saladin', estimatedTurnout: 60.9 },
  { governorateId: 'diy', governorateName: 'Diyala', estimatedTurnout: 61.5 },
  { governorateId: 'mut', governorateName: 'Muthanna', estimatedTurnout: 59.2 },
  { governorateId: 'qad', governorateName: 'Qadisiyyah', estimatedTurnout: 63.8 },
  { governorateId: 'kir', governorateName: 'Kirkuk', estimatedTurnout: 64.3 },
  { governorateId: 'sul', governorateName: 'Sulaymaniyah', estimatedTurnout: 69.7 },
  { governorateId: 'doh', governorateName: 'Dohuk', estimatedTurnout: 68.1 }
];
