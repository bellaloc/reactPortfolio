import React from 'react';

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <p>
        Hello, and welcome to my React Portfolio! I am a highly motivated and
        detail-oriented web developer with a passion for creating elegant and
        functional web applications. With a strong foundation in React, I bring
        creativity and problem-solving skills to the table, ensuring an optimal
        user experience.
      </p>

      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Responsive Design</h3>
                <p className="lead mb-0">
                  My focus on responsive design ensures that the applications I
                  develop are accessible and perform seamlessly on any device.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Modern and Innovative</h3>
                <p className="lead mb-0">
                  Leveraging the latest Bootstrap 5 framework, I create modern
                  and innovative designs that stand out in the competitive web
                  development landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>User-Focused Development</h3>
                <p className="lead mb-0">
                  I prioritize user experience, ensuring that applications are
                  not only visually appealing but also intuitive and easy to
                  navigate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p>
        As a developer, I am dedicated to staying current with industry trends
        and continuously expanding my skill set. My goal is to contribute to
        cutting-edge projects and bring value to your team. Thank you for
        exploring my portfolio, and I look forward to the opportunity to
        collaborate with you.
      </p>
    </div>
  );
}
