import "./StillInProgressStyle.css"; // Create this CSS file

const InProgressPage = () => {
  return (
    <div className="in-progress-page">
      <div className="in-progress-content">
        <img src="/logo2.png" alt="Logo" className="logo" />
        <h1>Page Still in Progress</h1>
        <p>
          We are working hard to bring you this content. Please check back
          later.
        </p>
      </div>
    </div>
  );
};

export default InProgressPage;
