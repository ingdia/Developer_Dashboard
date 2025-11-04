import { Cloud, Code, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-amber to-amber-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-gray-50 via-white to-gray-50 mt-auto transition-all duration-500 relative overflow-hidden">
   
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-6 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
     
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-2">
              <div className="bg-gray-500/20 dark:bg-gray-500/20 bg-gray-100 p-1.5 rounded-md">
                <Cloud className="w-3.5 h-3.5 text-gray-700 dark:text-gray-400 " />
              </div>
              <div className="bg-gray-400 dark:bg-gray-500  p-1.5 rounded-md">
                <Code className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 " />
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-400  text-sm flex items-center gap-2">
              <span>Crafted with</span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 dark:text-yellow-400 text-yellow-500 animate-pulse" />
              <span className="text-gray-300 dark:text-gray-300 text-gray-700 font-medium">
                by developer, for developers
              </span>
            </p>
          </div>

          {/* Right - Status indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">
              All systems operational
            </span>
          </div>
        </div>
        
        {/* Bottom attribution */}
        <div className="text-gray-600 dark:text-gray-600 text-gray-500 text-xs text-center mt-4 flex items-center justify-center gap-1.5">
          <span>Powered by OpenWeather & GitHub</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}