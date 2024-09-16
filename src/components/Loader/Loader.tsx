import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <img className={css.loader} src="/images/vinted.png" alt="Vinted image" />
    </div>
  );
};

export default Loader;
