import { useEffect, useState } from "react";

const SGC = ({ setNotes }) => {
  const [localNotes, setLocalNotes] = useState([
    { module: 'EGS', note: '', coff: 3 },
    { module: 'MATH', note: '', coff: 4 },
    { module: 'COMPTA', note: '', coff: 6 },
    { module: 'EOAE', note: '', coff: 6 },
    { module: 'PHILO', note: '', coff: 2 },
    { module: 'LANG2', note: '', coff: 2 },
    
  ]);

  useEffect(() => {
    setNotes(localNotes);
  }, [localNotes, setNotes]);

  const handleChange = (index, value) => {
    const updated = [...localNotes];
    updated[index].note = value;
    setLocalNotes(updated);
  };

  return (
    <div>
      <div className="md:flexitems-center gap-2 mb-2">
        <div className="flex-1">
          <label className="label">الإقتصاد العام والإحصاء (EGS)</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[0].note}
            onChange={(e) => handleChange(0, e.target.value)}
            className="input-select"
            placeholder="الإقتصاد العام والإحصاء"
          />
        </div>
        <div className="flex-1">
          <label className="label">الرياضيات (MATH)</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[1].note}
            onChange={(e) => handleChange(1, e.target.value)}
            className="input-select"
            placeholder="الرياضيات"
          />
        </div>
      </div>

      <div className="mb-2">
        <label className="label">المحاسبة والرياضيات المالية (Compta)</label>
        <input
          type="number"
          min={0}
          max={20}
          value={localNotes[2].note}
          onChange={(e) => handleChange(2, e.target.value)}
          className="input-select"
          placeholder="المحاسبة والرياضيات المالية"
        />
      </div>

      <div className="mb-2">
        <label className="label">الإقتصاد والتنظيم الإداري للمقاولات (EOAE)</label>
        <input
          type="number"
          min={0}
          max={20}
          value={localNotes[3].note}
          onChange={(e) => handleChange(3, e.target.value)}
          className="input-select"
          placeholder="الإقتصاد والتنظيم الإداري للمقاولات"
        />
      </div>

      <div className="md:flexitems-center gap-2 mb-2">
        <div className="flex-1">
          <label className="label">اللغة الأجنبية الثانية</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[4].note}
            onChange={(e) => handleChange(4, e.target.value)}
            className="input-select"
            placeholder="اللغة الأجنبية الثانية"
          />
        </div>
        <div className="flex-1">
          <label className="label">الفلسفة</label>
          <input
            type="number"
            min={0}
            max={20}
            value={localNotes[5].note}
            onChange={(e) => handleChange(5, e.target.value)}
            className="input-select"
            placeholder="الفلسفة"
          />
        </div>
      </div>
    </div>
  );
};

export default SGC;
