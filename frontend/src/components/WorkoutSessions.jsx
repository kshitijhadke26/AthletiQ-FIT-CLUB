import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Transform your fitness journey with our expertly curated workout sessions designed to help you achieve your goals faster and more efficiently.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Push your limits and unlock your full potential with our intense and exhilarating bootcamps! Designed for all fitness levels, our featured bootcamps provide a challenging yet rewarding experience that guarantees results.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Fat Burn Bootcamp</h4>
            <p>
              Shed those extra pounds with high-energy sessions focused on calorie burning and metabolic boosting.
            </p>
          </div>
          <div>
            <h4>Strength Mastery Bootcamp</h4>
            <p>
              Build raw power and endurance with targeted strength and resistance training.
            </p>
          </div>
          <div>
            <h4>Athlete’s Edge Bootcamp</h4>
            <p>
              Train like a pro with drills that improve speed, agility, and athletic performance.
            </p>
          </div>
          <div>
            <h4>Outdoor Adventure Bootcamp</h4>
            <p>
              Take your workout outdoors and enjoy nature while conquering obstacle-based challenges.
            </p>
          </div>
          <p>
          Don’t miss the chance to join our community of fitness enthusiasts and elevate your training with these premium bootcamp experiences. Let’s sweat, grind, and achieve together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
