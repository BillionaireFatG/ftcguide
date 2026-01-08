export function calculateSpeed(motorRPM, wheelDiameterInches, gearRatio) {
  const wheelRPM = motorRPM / gearRatio;
  const wheelCircumferenceFt = (Math.PI * wheelDiameterInches) / 12;
  const speedFPS = (wheelRPM * wheelCircumferenceFt) / 60;
  const speedMPS = speedFPS * 0.3048;
  const speedMPH = speedFPS * 0.681818;
  const timeToCross12Ft = speedFPS > 0 ? 12 / speedFPS : 0;
  
  return {
    motorRPM,
    wheelDiameterInches,
    gearRatio,
    speedFPS,
    speedMPS,
    speedMPH,
    timeToCross12Ft,
  };
}

export function calculateTorque(motorStallTorqueNm, gearRatio, efficiency = 0.9) {
  return motorStallTorqueNm * gearRatio * efficiency;
}

export function calculateAcceleration(totalTorqueNm, wheelRadiusM, robotMassKg, frictionCoefficient = 0.8) {
  const force = totalTorqueNm / wheelRadiusM;
  const maxFriction = robotMassKg * 9.81 * frictionCoefficient;
  const actualForce = Math.min(force, maxFriction);
  return actualForce / robotMassKg;
}
