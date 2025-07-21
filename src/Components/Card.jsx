
function Card({ saare }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card shadow custom-card border-start border-primary border-4"
        style={{ minHeight: "300px", background: "linear-gradient(to right, #ffffff, #e6f0ff)" }}
      >
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">{saare.title}</h5>
          <p className="card-text text-dark">{saare.body}</p>

          <p className="text-muted mb-2">💬 {saare.reaction}</p>

          <div className="d-flex flex-wrap gap-1">
            {Array.isArray(saare.tag) ? (
              saare.tag.map((one) => (
                <span key={one} className="badge bg-warning text-dark">
                  #{one}
                </span>
              ))
            ) : (
              <span className="badge bg-secondary">No Tags</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
