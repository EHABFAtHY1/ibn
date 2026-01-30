import { Building2, Wrench, Network, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { departments } from '@/data/projectsData';

export function OrganizationalStructure() {
  const { theme } = useTheme();
  const [expandedDepartment, setExpandedDepartment] = useState<string | null>(null);
  const [expandedSubDepartment, setExpandedSubDepartment] = useState<string | null>(null);



  const toggleDepartment = (id: string) => {
    if (expandedDepartment === id) {
      setExpandedDepartment(null);
      setExpandedSubDepartment(null);
    } else {
      setExpandedDepartment(id);
      setExpandedSubDepartment(null);
    }
  };

  const toggleSubDepartment = (id: string) => {
    setExpandedSubDepartment(expandedSubDepartment === id ? null : id);
  };

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#1a1a1a] to-[#252525]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className={`w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center ${theme === 'dark' ? 'bg-gradient-to-br from-[#1a1a1a] to-[#252525]' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
                <Network className="text-primary" size={52} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
          <h2 className="text-5xl text-primary mb-6">الهيكل التنظيمي</h2>
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            هيكل تنظيمي متكامل ومرن يضمن سير العمل بكفاءة واحترافية عالية
          </p>
        </div>

        {/* Interactive Organizational Chart */}
        <div className="max-w-5xl mx-auto">
          {/* Level 1 - CEO */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary to-[#a88b4d] rounded-2xl p-8 w-80 text-center shadow-2xl shadow-primary/30 cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                <Building2 className="text-primary" size={40} />
              </div>
              <h3 className="text-primary-foreground text-2xl mb-2">الإدارة العامة</h3>
              <p className="text-primary-foreground/80 text-lg">المدير العام</p>
            </motion.div>
          </motion.div>

          {/* Connector Line */}
          <div className="flex justify-center mb-10">
            <motion.div
              animate={{
                height: expandedDepartment ? '64px' : '64px',
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="w-[3px] bg-gradient-to-b from-primary to-primary/40 rounded-full"
            />
          </div>

          {/* Level 2 - Departments (Expandable) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Department Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => toggleDepartment(dept.id)}
                  className={`group border-2 border-primary/40 rounded-2xl p-6 w-full text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                    expandedDepartment === dept.id 
                      ? 'border-primary bg-primary/10' 
                      : 'hover:border-primary'
                  } ${theme === 'dark' ? 'bg-gradient-to-b from-[#252525] to-[#1a1a1a]' : 'bg-gradient-to-b from-white to-gray-50'}`}
                >
                  <motion.div
                    animate={expandedDepartment === dept.id ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl border-2 border-primary mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-[#1a1a1a] to-[#252525]' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}
                  >
                    {dept.icon}
                  </motion.div>
                  <h4 className="text-primary text-lg mb-2">{dept.title}</h4>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <span className="text-sm">{expandedDepartment === dept.id ? 'إخفاء' : 'عرض'} الأقسام</span>
                    {expandedDepartment === dept.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </motion.div>

                {/* Sub-departments (Nested inside department) */}
                <AnimatePresence>
                  {expandedDepartment === dept.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full overflow-hidden"
                    >
                      <div className="space-y-4">
                        {dept.subDepartments.map((subDept, subIndex) => (
                          <motion.div
                            key={subDept.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                            className="mr-8"
                          >
                            {/* Sub-department Card */}
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubDepartment(subDept.id);
                              }}
                              className={`border border-primary/30 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                                expandedSubDepartment === subDept.id 
                                  ? 'border-primary bg-primary/5' 
                                  : 'hover:border-primary'
                              } ${theme === 'dark' ? 'bg-gradient-to-b from-[#252525] to-[#1a1a1a]' : 'bg-gradient-to-b from-white to-gray-50'}`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg border border-primary flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-gradient-to-br from-[#1a1a1a] to-[#252525]' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
                                  {subDept.icon}
                                </div>
                                <div className="flex-1 text-right">
                                  <p className="text-primary">{subDept.title}</p>
                                </div>
                                {expandedSubDepartment === subDept.id ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-primary" />}
                              </div>

                              {/* Sections (Nested inside sub-department) */}
                              <AnimatePresence>
                                {expandedSubDepartment === subDept.id && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="space-y-2 pr-4">
                                      {subDept.sections.map((section, sectionIndex) => (
                                        <motion.div
                                          key={sectionIndex}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: sectionIndex * 0.05 }}
                                          className={`flex items-center gap-3 border border-primary/20 px-4 py-3 rounded-lg hover:border-primary transition-all duration-300 ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-gray-50'}`}
                                        >
                                          <Wrench className="text-primary flex-shrink-0" size={16} />
                                          <span className="text-foreground text-sm">{section}</span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className={`mt-12 text-center border-2 border-primary/30 rounded-2xl p-6 ${theme === 'dark' ? 'bg-gradient-to-br from-[#252525] to-[#1a1a1a]' : 'bg-gradient-to-br from-gray-50 to-white'}`}
          >
            <p className="text-muted-foreground text-lg">
              💡 انقر على الإدارة لعرض الأقسام، وانقر على القسم لعرض الأقسام الفرعية
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
