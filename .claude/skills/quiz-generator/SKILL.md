# Quiz Generator Skill

## Purpose
Generate new Myanmar quiz questions in various categories.

## Usage
When asked to create new quiz questions, follow this format:

### Input
- Category: history | culture | geography | food
- Count: number of questions to generate
- Difficulty: easy | medium | hard

### Output Format
Generate questions as JavaScript objects:

```javascript
{
  q: "Question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0  // index of correct answer (0-3)
}
```

### Guidelines
- Questions should be factually accurate about Myanmar
- Use clear, simple English
- Provide 4 options per question
- Mix difficulty levels for engagement
- Cover diverse sub-topics within each category
- Avoid ambiguous or trick questions

### Categories
- **History**: Kings, colonial era, independence, modern politics
- **Culture**: Festivals, traditions, arts, clothing, religion
- **Geography**: Cities, rivers, mountains, states, borders
- **Food**: Dishes, ingredients, eating customs, regional specialties
