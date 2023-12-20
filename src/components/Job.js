import React from "react";
import PropTypes from "prop-types";

function Job({
  title,
  description,
  company,
  location,
  jobType,
  tags,
  applyLink,
}) {
  // Create a safe way to inject the HTML content received from the API
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="job">
      <h1 className="job-title">{title}</h1>
      <div className="job-company">{company}</div>
      <div className="job-location">{location}</div>
      <div className="job-type">{jobType}</div>
      <div
        className="job-description"
        dangerouslySetInnerHTML={createMarkup(description)}
      />
      {tags && (
        <div className="job-tags">
          {tags.map((tag, index) => (
            <span key={index} className="job-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <a
        href={applyLink}
        className="apply-now-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </a>
    </div>
  );
}

Job.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  applyLink: PropTypes.string.isRequired,
};

export default Job;
