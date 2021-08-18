import "./Container.css";
export const Container = ({ title = "", children }) => {
  return (
    <div className="base-container py-5 bg-light">
      <h3 className="text-center">{title}</h3>
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        {children}
      </div>
    </div>
  );
};
