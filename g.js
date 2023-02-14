// PROD PIECE CODE 

function calculateEPFandEPS(basicSalary) {
  // Constants for EPF and EPS contribution rates
  const EPF_RATE = 0.12;
  const EPS_RATE = 0.08;

  // Calculate EPF and EPS contributions
  const epfContribution = basicSalary * EPF_RATE;
  const epsContribution = basicSalary * EPS_RATE;

  // Limit EPS contribution to Rs. 1,250 per month
  if (epsContribution > 1250) {
    epsContribution = 1250;
  }

  // Calculate the total contribution
  const totalContribution = epfContribution + epsContribution;

  // Return the EPF and EPS contributions and the total contribution
  return {
    epf: epfContribution,
    eps: epsContribution,
    total: totalContribution,
  };
}

// Example usage
const salary = 20000;
const { epf, eps, total } = calculateEPFandEPS(salary);
console.log(`EPF contribution: Rs. ${epf}`);
console.log(`EPS contribution: Rs. ${eps}`);
console.log(`Total contribution: Rs. ${total}`);