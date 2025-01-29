export const Alert: React.FC<{
    children: React.ReactNode;
    className?: string;
  }> = ({ children, className = '' }) => (
    <div className={`p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 ${className}`}>
      {children}
    </div>
  );
  
  