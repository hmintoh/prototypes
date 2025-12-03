import styles from "./coffee.module.css";

function Coffee() {
  return (
    <div className={styles.section}>
      <h2> Prototype coffee is a verb, not a noun.</h2>

      <p>
        To prototype is to give form to a thought, unbound by expectation or
        result.
      </p>
      <p>
        The cold brew you are holding has been steeped in collective critique
        and bottled with playful experimentation. Have a sip and find yourself
        welcomed in the process.
      </p>
      <p>
        For enquiries, please get in touch at{" "}
        <a className={styles.email} href="mailto:coffee@prototypes.asia">
          coffee@prototypes.asia
        </a>
      </p>
    </div>
  );
}

export { Coffee };
