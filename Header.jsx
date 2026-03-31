import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Home, BookOpen, Info } from 'lucide-react';

const Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'specializations', label: 'التخصصات', icon: BookOpen },
    { id: 'about', label: 'حول الموقع', icon: Info }
  ];

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-none">مساعد التخصص</h1>
              <p className="text-xs text-slate-500 mt-1">دليلك الأكاديمي في العراق</p>
            </div>
          </div>

          {/* Navigation & Badge */}
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 px-3 py-1 hidden sm:flex">
              إصدار 2026 المحدث ⚡
            </Badge>
            
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center gap-2 text-sm"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
