import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.section}>
      <h1>Prototype</h1>
      <p>
        To prototype is to give form to a thought; to let an idea step into the
        world, even if it wobbles at first. Each iteration teaches us something
        new, guiding us closer to what it is meant to become. We follow
        curiosity wherever it leads, embracing the messy, magical process of
        turning imagination into reality.
      </p>
      <p>
        Our community keeps us moving - a collection of curious minds, bold
        experiments, and shared “what ifs”. What you see today is the result of
        that collective rhythm: the urge to reimagine and make something that
        feels alive.
      </p>
      <p>
        So welcome to Prototype - where ideas that have been brewing can finally
        bloom in full.
      </p>
    </div>
  );
}

export { Home };
