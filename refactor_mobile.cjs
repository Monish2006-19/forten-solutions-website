const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const pages = ['Home.jsx', 'Services.jsx', 'Work.jsx', 'About.jsx', 'Products.jsx', 'Consultation.jsx', 'PrivacyPolicy.jsx', 'Terms.jsx', 'NotFound.jsx'];

pages.forEach(filename => {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports if not exist
  if (!content.includes('GlobalNavbar')) {
    content = content.replace(
      /import React([^;]*);/,
      "import React$1;\nimport GlobalNavbar from '../components/GlobalNavbar';\nimport GlobalFooter from '../components/GlobalFooter';"
    );
  }

  // Remove inline nav completely
  // The nav starts with <nav and ends with </nav>
  // We use a regex that matches the nav tag across multiple lines
  content = content.replace(/<nav[\s\S]*?<\/nav>/g, '');

  // Remove inline footer completely
  content = content.replace(/<footer[\s\S]*?<\/footer>/g, '');

  // Inject GlobalNavbar right after SEO or the opening div
  // Easiest way is to replace `<div className="min-h-screen` with `<div className="min-h-screen... flex flex-col">\n<GlobalNavbar />`
  // Wait, some pages like Consultation don't use the exact same div, or they might not have it.
  // Actually, we can just replace the <SEO /> tag with <SEO /> \n <GlobalNavbar /> if it doesn't already have it
  if (!content.includes('<GlobalNavbar />') && content.includes('<SEO')) {
    content = content.replace(/(<SEO[\s\S]*?\/>\s*)(<div[^>]*>)/, '$1$2\n      <GlobalNavbar />\n');
  } else if (!content.includes('<GlobalNavbar />')) {
      // Fallback for NotFound.jsx which might not have SEO
      content = content.replace(/(<div[^>]*min-h-screen[^>]*>)/, '$1\n      <GlobalNavbar />\n');
  }

  // Inject GlobalFooter right before the final </div>\n    </>
  if (!content.includes('<GlobalFooter />')) {
    content = content.replace(/<\/div>\s*<\/>\s*\);\s*}\s*export/g, '  <GlobalFooter />\n    </div>\n    </>\n  );\n}\n\nexport');
    // If that didn't match (some pages might not have the fragment)
    if (!content.includes('<GlobalFooter />')) {
       content = content.replace(/<\/div>\s*\);\s*}\s*export/g, '  <GlobalFooter />\n    </div>\n  );\n}\n\nexport');
    }
  }

  // Fix Typography
  content = content.replace(/text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
  content = content.replace(/text-5xl/g, 'text-4xl lg:text-5xl');
  content = content.replace(/text-7xl/g, 'text-5xl md:text-6xl lg:text-7xl');

  // Fix Padding to be better for mobile
  content = content.replace(/px-8 md:px-16 lg:px-24/g, 'px-5 md:px-12 lg:px-24');

  // Fix consultation page specific min-h-screen flex layout to wrap correctly
  if (filename === 'Consultation.jsx') {
     content = content.replace(/flex-col lg:flex-row/, 'flex-col lg:flex-row min-h-screen');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Refactored ${filename}`);
});
