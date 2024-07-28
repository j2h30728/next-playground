const ErrorMessage = ({ message, onReset }: { message: string; onReset: () => void }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <span>{message}</span>
      <button onClick={onReset}>Try again</button>
    </div>
  );
};

export default ErrorMessage;
