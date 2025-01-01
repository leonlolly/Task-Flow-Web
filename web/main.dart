import 'package:web/web.dart' as web;

void main() {
  final document = web.document;
  document.title = 'Task Flow Privacy Policy';

  final contentDiv = document.createElement('div') as web.HTMLDivElement;
  contentDiv.id = 'content';
  document.body!.append(contentDiv);

  final header = document.createElement('h1') as web.HTMLHeadingElement;
  header.text = 'Task Flow Privacy Policy';
  contentDiv.append(header);

  final container = document.createElement('div') as web.HTMLDivElement;
  container.classList.add('container');
  contentDiv.append(container);

  final sections = [
    {'title': 'Last updated:', 'content': 'January 1, 2025'},
    {'title': 'Introduction', 'content': 'This Privacy Policy describes how Task Flow ("we," "our," or "us") handles information through our mobile application ("Task Flow" or "the App"). We are committed to protecting your privacy and ensuring you have a positive experience when using our application.'},
    {'title': 'Information Collection and Use', 'content': 'Task Flow has been designed with your privacy in mind.'},
    {'title': 'Information We Do Not Collect', 'content': '''We do not collect, store, or process any data. This includes, but is not limited to:

• Personal identification information
• Email addresses or contact information
• Geographic location data
• Device information or identifiers
• Usage patterns or statistics

All data is stored locally on your device and is not transmitted to our servers or any third parties.'''},
    {'title': 'Third-Party Data Collection', 'content': '''Please note that the app distribution platforms (Google Play Store and Apple App Store) may collect certain information in accordance with their respective privacy policies:

• Basic installation metrics
• App usage statistics (anonymized)
• Device-specific information (operating system version, device model)
• Crash reports and performance data

For more information about their data collection practices, please refer to:

• Google Play Store Privacy Policy
• Apple App Store Privacy Policy'''},
    {'title': 'Data Security', 'content': 'While we do not collect personal data, we are committed to ensuring that our application maintains high security standards to protect your device and usage experience.'},
    {'title': 'Changes to This Privacy Policy', 'content': 'We reserve the right to update or change our Privacy Policy at any time. Any modifications will be effective immediately upon posting the updated Privacy Policy. We will notify you of any material changes by updating the "Last updated" date at the top of this Privacy Policy.'},
    {'title': 'Compliance', 'content': 'This Privacy Policy is compliant with applicable privacy laws and regulations. By using Task Flow, you agree to the terms outlined in this Privacy Policy.'}
  ];

  for (final section in sections) {
    if (section['title'] != 'Last updated:') {
      final title = document.createElement('h2') as web.HTMLHeadingElement;
      title.text = section['title']!;
      container.append(title);
    }

    final paragraph = document.createElement('p') as web.HTMLParagraphElement;
    paragraph.innerHTML = section['content']!;
    container.append(paragraph);
  }

  final style = document.createElement('style') as web.HTMLStyleElement;
  style.text = '''
    body {
      margin: 0;
      font-family: sans-serif;
      line-height: 1.6;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      margin-bottom: 20px;
      text-align: center;
    }

    h2 {
      color: #333;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 20px;
      text-align: justify;
    }
  ''';
  document.head!.append(style);
}