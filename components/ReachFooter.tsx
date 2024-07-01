import Link from 'next/link';

export default function ReachFooter() {
  return (
    <footer className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16" style={{ gap: '350px' }}> {/* Added gap for space between boxes */}
          <div className="flex items-center space-x-4">
            <h1> footer </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}