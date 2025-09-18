import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from '@/types/blog';

// Sample blog posts data - in a real app, these would be loaded from markdown files
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Social Media Manipulation in Democratic Elections: A Research Framework',
    date: '2024-01-15',
    slug: 'social-media-manipulation-framework',
    excerpt: 'Exploring how political actors leverage social media algorithms and behavioral patterns to influence electoral outcomes through propaganda and targeted messaging.',
    readTime: 8,
    tags: ['Social Media', 'Elections', 'Political Science', 'Research'],
    content: `# Social Media Manipulation in Democratic Elections: A Research Framework

## Research Question

How and to what effect do political actors use social media and related technology to manipulate electoral behaviour?

## Hypothesis Development

### H1: Algorithmic Amplification
We believe political actors have had serious influences in electoral behaviour through their manipulation of social media towards voters. The algorithmic systems that govern content distribution on platforms like Facebook, Twitter, and YouTube create opportunities for sophisticated actors to amplify their messaging beyond organic reach.

### H2: Virality vs. Truth
We believe there are certain aspects of social media algorithmic behavior that values virality over truth and stability. This creates an environment where sensational, divisive content—regardless of its factual accuracy—receives greater distribution than measured, factual discourse.

## Literature Review

### The Digital Public Sphere
The transformation of political discourse from traditional media gatekeepers to algorithmic curation has fundamentally altered how information flows in democratic societies. Habermas's concept of the public sphere, once mediated by professional journalists and editorial standards, now operates through recommendation algorithms optimized for engagement rather than democratic deliberation.

### Computational Propaganda
Recent scholarship by researchers at the Oxford Internet Institute has documented systematic campaigns of computational propaganda—the use of algorithms, automation, and big data to manipulate public opinion. These efforts range from bot networks amplifying particular narratives to sophisticated micro-targeting campaigns that deliver different messages to different demographic groups.

## Methodology

This research employs a mixed-methods approach combining:

1. **Content Analysis**: Systematic examination of political content distribution patterns across major social media platforms
2. **Network Analysis**: Mapping information flow patterns and identifying coordinated inauthentic behavior
3. **Survey Research**: Understanding voter perceptions and information consumption habits
4. **Case Studies**: Deep dives into specific electoral campaigns and their digital strategies

## Preliminary Findings

### The Virality Premium
Our analysis reveals that social media algorithms consistently prioritize content that generates high engagement metrics—likes, shares, comments—over content that promotes informed democratic discourse. This creates what we term a "virality premium" for sensational, emotionally charged content.

### Foreign Interference Patterns
Documentation of foreign interference campaigns reveals sophisticated understanding of domestic political dynamics. These operations don't simply promote preferred candidates but work to increase polarization and decrease trust in democratic institutions.

### Asymmetric Vulnerability
Democratic societies face an asymmetric vulnerability to information manipulation. The same openness and free speech principles that strengthen democracy also create attack surfaces for malicious actors seeking to undermine democratic processes.

## Implications for Democratic Governance

The findings suggest that current social media architectures pose significant challenges to democratic governance. The optimization for engagement over accuracy, combined with the ease of creating and distributing false information, creates conditions where truth and falsehood compete on unequal footing.

## Future Research Directions

1. **Platform Design**: Investigating how different algorithmic approaches might better serve democratic discourse
2. **Regulation**: Examining policy responses that balance free speech with democratic protection
3. **Media Literacy**: Developing and testing interventions to improve citizen resilience to manipulation

## Conclusion

The intersection of social media technology and democratic politics represents one of the most significant challenges facing contemporary democracies. Understanding these dynamics—and developing appropriate responses—is crucial for the health of democratic institutions in the digital age.

---

*This research was conducted as part of ongoing studies into the relationship between technology and democratic governance. For questions or collaboration inquiries, please contact the research team.*`
  },
  {
    id: '2',
    title: 'The Algorithm of Influence: How Recommendation Systems Shape Political Discourse',
    date: '2024-01-08',
    slug: 'algorithm-influence-political-discourse',
    excerpt: 'An in-depth analysis of how social media recommendation algorithms prioritize engagement over accuracy, creating vulnerabilities in democratic information systems.',
    readTime: 6,
    tags: ['Algorithms', 'Political Discourse', 'Technology'],
    content: `# The Algorithm of Influence: How Recommendation Systems Shape Political Discourse

## The Engagement Optimization Problem

Modern social media platforms operate on a fundamental principle: maximize user engagement to increase advertising revenue. This seemingly neutral business objective has profound implications for democratic discourse, as the algorithms that determine what content users see are optimized for clicks, shares, and time spent on platform rather than the quality or accuracy of information.

## The Filter Bubble Effect

Research conducted by Eli Pariser and others has documented how personalization algorithms create "filter bubbles"—information environments where users are primarily exposed to content that confirms their existing beliefs. While this increases engagement (people enjoy consuming content that validates their worldview), it also reduces exposure to diverse perspectives essential for democratic deliberation.

## Case Study: 2016 US Presidential Election

The 2016 US Presidential Election provides a compelling case study in algorithmic manipulation. Analysis of Facebook engagement data revealed that fake news stories generated more engagement than real news stories in the final months of the campaign. This wasn't due to consumer preference for false information, but rather because false stories were often crafted specifically to generate emotional responses that drive algorithmic amplification.

### The Macedonia Connection

Investigation revealed that teenagers in Macedonia were creating fabricated news stories about US politics, not for ideological reasons, but because these stories generated significant advertising revenue through social media sharing. The algorithmic emphasis on engagement created a direct financial incentive for the production and distribution of false information.

## Technical Mechanisms of Manipulation

### Engagement Hacking
Sophisticated political actors have learned to "hack" engagement algorithms by creating content designed specifically to trigger sharing behavior. This includes:
- Emotional manipulation techniques
- Confirmation bias exploitation
- Outrage amplification
- False controversy generation

### Coordinated Inauthentic Behavior
State and non-state actors employ networks of fake accounts to artificially amplify content, triggering algorithmic promotion. These networks can make fringe content appear mainstream through coordinated sharing and engagement.

## The Virality-Truth Gap

Our analysis reveals a fundamental tension between algorithmic optimization and democratic discourse. Content that goes viral often does so because it:
- Provokes strong emotional reactions
- Confirms existing biases
- Simplifies complex issues
- Makes dramatic claims

Accurate, nuanced information about complex policy issues rarely possesses these characteristics, creating what we term the "virality-truth gap."

## Platform Responses and Their Limitations

Social media companies have implemented various measures to address these issues:
- Fact-checking partnerships
- Content moderation policies
- Algorithm adjustments
- Transparency reports

However, these measures often address symptoms rather than root causes, and some have proven ineffective or counterproductive.

## Toward Democratic Algorithm Design

Future research must explore how recommendation systems could be designed to serve democratic discourse while remaining commercially viable. This might include:
- Diversity metrics in content recommendation
- Algorithmic transparency requirements
- User control over ranking criteria
- Public interest algorithms

## Conclusion

The challenge of aligning algorithmic systems with democratic values represents one of the most important technical and policy challenges of our time. As these systems increasingly mediate public discourse, their design choices become choices about the kind of democratic society we inhabit.`
  },
  {
    id: '3',
    title: 'Digital Propaganda and the Crisis of Democratic Truth',
    date: '2023-12-22',
    slug: 'digital-propaganda-democratic-truth',
    excerpt: 'Examining how digital technologies enable new forms of propaganda that challenge traditional concepts of truth in democratic societies.',
    readTime: 10,
    tags: ['Propaganda', 'Democracy', 'Truth', 'Digital Media'],
    content: `# Digital Propaganda and the Crisis of Democratic Truth

## The Evolution of Propaganda

Propaganda is not new to democratic societies, but digital technologies have fundamentally altered its scale, sophistication, and effectiveness. Where traditional propaganda required significant resources and institutional infrastructure, digital propaganda can be produced and distributed by small teams with modest budgets, yet achieve global reach and impact.

## The Democratization of Manipulation

The same technologies that have democratized information production and distribution have also democratized manipulation. Social media platforms, originally envisioned as tools for connecting people and sharing information, have become vectors for sophisticated influence operations.

### Historical Context

To understand the significance of digital propaganda, it's helpful to consider the evolution of information warfare:

1. **Pre-Digital Era**: Propaganda required control of mass media institutions
2. **Early Internet**: Information abundance reduced gatekeeping power
3. **Social Media Era**: Algorithmic curation creates new forms of information control
4. **Current Era**: AI-enabled content generation and micro-targeting

## Case Studies in Digital Propaganda

### Brexit Referendum (2016)

The Brexit referendum campaign demonstrated how digital propaganda techniques could influence major democratic decisions. Key elements included:
- Micro-targeted advertising based on psychological profiles
- Coordinated social media campaigns
- Foreign interference through social media manipulation
- Data harvesting for voter targeting

Investigation by the UK's Information Commissioner revealed extensive misuse of personal data for political advertising, raising questions about the integrity of the democratic process.

### Russian Information Operations

Russian information operations, documented by intelligence agencies and academic researchers, reveal sophisticated understanding of how to exploit democratic vulnerabilities:

#### Objectives
- Increase political polarization
- Decrease trust in democratic institutions
- Promote extreme viewpoints on both sides of political divides
- Create appearance of grassroots support for preferred narratives

#### Tactics
- Creation of fake grassroots organizations ("astroturfing")
- Amplification of existing social divisions
- Distribution of divisive content across political spectrum
- Coordination across multiple platforms and formats

## The Technology of Truth Decay

### Deep Fakes and Synthetic Media
Advances in AI enable the creation of increasingly convincing fake content:
- Synthetic video and audio
- AI-generated text
- Manipulated images
- Fabricated documents

This technology doesn't just enable new forms of deception—it also creates what researchers call the "liar's dividend," where the mere possibility of fake content allows bad actors to dismiss authentic evidence as potentially fabricated.

### Information Fragmentation
Digital media enables the creation of entirely separate information ecosystems, where different groups of citizens operate with fundamentally different sets of "facts" about political reality. This fragmentation makes democratic deliberation nearly impossible when participants cannot agree on basic factual premises.

## The Economics of Misinformation

### Attention Economy Dynamics
The digital attention economy creates perverse incentives:
- Sensational content generates more engagement
- Engagement drives advertising revenue
- False information often more engaging than accurate information
- Economic incentives favor rapid publication over accuracy

### Micro-Targeting Revenue Models
Detailed personal data enables sophisticated advertising targeting, which also enables sophisticated propaganda targeting. The same systems that deliver personalized product advertisements can deliver personalized political messages designed to manipulate electoral behavior.

## Democratic Implications

### Epistemic Crisis
Democracy depends on citizens' ability to evaluate information and make informed choices. When the information environment is polluted with sophisticated misinformation, this fundamental requirement becomes difficult or impossible to meet.

### Institutional Legitimacy
Sustained propaganda campaigns can undermine trust in democratic institutions, creating what political scientists call "democratic deconsolidation"—the weakening of democratic norms and expectations.

### Policy Paralysis
When citizens cannot agree on basic facts, policy-making becomes nearly impossible. Climate change provides a clear example: scientific consensus is undermined by coordinated misinformation campaigns, preventing effective policy responses.

## Potential Solutions

### Regulatory Approaches
- Platform transparency requirements
- Political advertising disclosure rules
- Data protection legislation
- Anti-monopoly enforcement

### Technical Solutions
- Content provenance systems
- Decentralized platforms
- User-controlled algorithms
- Improved detection systems

### Educational Interventions
- Media literacy programs
- Critical thinking education
- Information verification skills
- Democratic engagement training

### Platform Design Changes
- Reduced emphasis on engagement metrics
- Increased friction for sharing
- Diversity requirements in content recommendation
- User agency in algorithm selection

## The Path Forward

Addressing digital propaganda requires coordinated action across multiple domains:
1. **Technical**: Developing systems that promote accurate information
2. **Legal**: Creating appropriate regulatory frameworks
3. **Educational**: Building citizen resilience to manipulation
4. **Cultural**: Rebuilding norms around truth and democratic discourse

## Conclusion

The crisis of democratic truth represents an existential challenge to democratic governance. The technologies that promised to democratize information have also democratized manipulation. Meeting this challenge requires not just technical solutions, but a fundamental rethinking of how democratic societies organize information, discourse, and decision-making in the digital age.

The stakes could not be higher: the future of democratic governance itself depends on our ability to create information systems that serve democratic values rather than undermine them.`
  }
];

export function getAllPosts(): BlogPost[] {
  return samplePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  return samplePosts.find(post => post.slug === slug) || null;
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

// Utility function to calculate read time
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Parse markdown with frontmatter (for when loading from files)
export function parseMarkdownPost(fileContent: string, slug: string): BlogPost {
  const { data, content } = matter(fileContent);
  const metadata = data as BlogMetadata;
  
  return {
    id: slug,
    slug,
    title: metadata.title,
    date: metadata.date,
    excerpt: metadata.excerpt,
    content,
    readTime: calculateReadTime(content),
    tags: metadata.tags || [],
  };
}