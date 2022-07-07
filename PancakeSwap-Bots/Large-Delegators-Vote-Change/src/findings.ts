import { Finding, FindingSeverity, FindingType } from "forta-agent";

export const ALERTS: { [key in FindingSeverity]?: string } = {
  [FindingSeverity.Low]: "CAKE-10-1",
  [FindingSeverity.Medium]: "CAKE-10-2",
  [FindingSeverity.High]: "CAKE-10-3",
};

export function createFinding(description: string, metadata: {}, severity: FindingSeverity) {
  return Finding.fromObject({
    name: "CakeToken Event Emitted",
    description: `CakeToken event (${description})`,
    alertId: ALERTS[severity]!,
    protocol: "PancakeSwap",
    severity: severity,
    type: severity === FindingSeverity.High ? FindingType.Suspicious : FindingType.Info,
    metadata,
  });
}
