import "./schedules.css";

export const FestivalSchedule = () => {
  const schedule = [
    { day: "రోజు 1", activity: "గణపతి ప్రతిష్టాపన, మహా పూజ" },
    { day: "రోజు 2", activity: "అభిషేకం, వేద పారాయణం, భజనలు" },
    { day: "రోజు 3", activity: "వినాయక వ్రత కథ, నిత్య పూజ" },
    { day: "రోజు 4", activity: "లలిత సహస్రనామ పూజ, హరతులు" },
    { day: "రోజు 5", activity: "అన్నదానం, వినాయక హోమం" },
    { day: "రోజు 6", activity: "సంకీర్తన, గణపతి హరతి" },
    { day: "రోజు 7", activity: "కోటి దీపోత్సవం, సంగీత కార్యక్రమం" },
    { day: "రోజు 8", activity: "మహా గణపతి పూజ, సత్సంగం" },
    { day: "రోజు 9", activity: "విసర్జన మహోత్సవం, శోభాయాత్ర" },
  ];

  return (
    <div className="festival-schedule-container">
      <h2 className="festival-schedule-title">🙏 శ్రీ గణేశ్ ఉత్సవం కార్యక్రమాల షెడ్యూల్ 🙏</h2>
      <ul className="festival-schedule-list">
        {schedule.map((item, index) => (
          <li key={index} className="festival-schedule-item">
            <span className="day-label">{item.day}</span>
            <span className="activity-text">– {item.activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
