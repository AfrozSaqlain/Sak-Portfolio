// SectionListSidebar.js
import React from 'react';

const SectionListSidebar = ({ sections, onSectionClick }) => {
  return (
    <div className="fixed left-0 top-0 h-full py-20 bg-inherit text-white p-4 w-48"> {/* Adjust the width using w-{size} */}
      <h2 className="text-xl font-semibold mb-4">Sections</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index} className="cursor-pointer mb-2" onClick={() => onSectionClick(index)}>
            {`${index + 1}. ${section.title}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionListSidebar;