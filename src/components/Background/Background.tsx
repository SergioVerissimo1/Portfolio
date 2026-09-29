import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { ParticlesConfig } from "./ParticlesConfig";
import styles from "./Background.module.css";

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function Background() {
  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="tsparticles"
        className={styles.background}
        options={ParticlesConfig}
      />
    </ParticlesProvider>
  );
}
