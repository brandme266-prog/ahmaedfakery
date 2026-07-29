const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeWebsite() {
  const url = 'https://fekrycompany.com/';
  try {
    console.log('Fetching ' + url);
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract textual data
    let extractedData = `# Data from ${url}\n\n`;

    // Extract headings
    extractedData += `## Headings\n`;
    $('h1, h2, h3').each((i, el) => {
      const text = $(el).text().trim();
      if (text) {
        extractedData += `- ${text}\n`;
      }
    });

    // Extract paragraphs
    extractedData += `\n## Content (Paragraphs)\n`;
    $('p').each((i, el) => {
      const text = $(el).text().trim();
      if (text) {
        extractedData += `${text}\n\n`;
      }
    });

    // Extract lists
    extractedData += `\n## Lists\n`;
    $('li').each((i, el) => {
      const text = $(el).text().trim();
      if (text) {
        extractedData += `- ${text}\n`;
      }
    });

    // Extract links
    extractedData += `\n## Links\n`;
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().trim();
      if (href && text && !href.startsWith('#')) {
        extractedData += `- [${text}](${href})\n`;
      }
    });

    // Save to file
    const outputPath = 'D:\\ahmedfakrey\\scraped_data.md';
    fs.writeFileSync(outputPath, extractedData);
    console.log('Data successfully saved to ' + outputPath);

  } catch (error) {
    console.error('Error scraping website:', error);
  }
}

scrapeWebsite();
