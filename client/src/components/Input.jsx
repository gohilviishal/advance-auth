import { forwardRef } from "react";

const Input = forwardRef(
  ({ icon: Icon, error, messageHide = false, ...props }, ref) => {
    return (
      <div className="mb-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon
              className={`w-5 ${error ? "text-red-500" : "text-green-500"}`}
            />
          </div>
          <input
            {...props}
            ref={ref}
            className={`w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700  focus:outline-none focus:ring-1/2 ${
              error
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-green-500 focus:border-green-500"
            } text-white placeholder-gray-400 transition-duration-200`}
          />
        </div>
        {error && !messageHide ? (
          <p className="text-sm text-red-500" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

export default Input;
