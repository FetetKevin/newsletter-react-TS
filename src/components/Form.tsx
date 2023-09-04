type FormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validation: boolean;
    inputValue: string;
  };
  
  export default function Form({
    handleSubmit,
    handleInputChange,
    validation,
    inputValue,
  }: FormProps) {
    return (
      <>
        <div className="form-header">
          <p className="form-left">Email address</p>
          {validation ? <p className="error-msg">Valid email required</p> : null}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="email@company.com"
            className={validation ? 'error' : ''}
            value={inputValue}
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </>
    );
  }