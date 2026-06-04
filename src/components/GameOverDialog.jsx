import '../styles/GameOverDialog.css';

function GameOverDialog({ dialogRef, closeDialog, isGameWon }) {
  return (
    <dialog ref={dialogRef} className="game-over-dialog">
      {isGameWon ? (
        <>
          <h3 className="dialog-title">You won!</h3>
          <p className="dialog-msg">
            You clicked all 12 Demon Slayer cards without a single repeat. A
            true Hashira.
          </p>
        </>
      ) : (
        <>
          <h3 className="dialog-title">You lose!</h3>
          <p className="dialog-msg">
            Your mind has been overtaken. A demon slayer must never forget a
            face.
          </p>
        </>
      )}
      <button onClick={closeDialog} className="dialog-btn">
        Play Again
      </button>
    </dialog>
  );
}

export default GameOverDialog;
