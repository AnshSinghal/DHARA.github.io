import os
import re

def annotate_text(text):
    # Initialize annotated text
    annotated_text = ""

    # Define regular expressions for entity extraction
    patterns = {
        "COURT": r"(supreme court|high court).*?\n",
        "JUDGE": r"author: (.*?)\n|bench: (.*?)\n",
        "APPELLANT": r"(appellant|petitioner)(s)?",
        "RESPONDENT": r"(respondent|defendant)(s)?",
        "DATE": r"\d{1,2} (january|february|march|april|may|june|july|august|september|october|november|december) \d{4}",
        "PROVISION": r"(section|article|rule|order|clause) \d+(\.\d+)*",  # Adjust as needed
        "CITATION": r"\(.*?\)",  # Basic citation pattern, refine as needed
    }

    # Iterate through lines and apply BIO tagging
    for line in text.splitlines():
        line = line.strip()
        
        # Check for matches with entity patterns
        for entity_type, pattern in patterns.items():
            matches = re.finditer(pattern, line)
            for match in matches:
                start, end = match.span()
                entity_text = match.group(0).strip()

                # BIO tagging
                line = line[:start] + f" B-{entity_type} " + entity_text + f" I-{entity_type} " + line[end:]

        # Add the annotated line to the result
        annotated_text += line + "\n"

    return annotated_text
# Process all cleaned case files
for i in range(1, 11):  # Assuming 400 files named cleanedcase1, cleanedcase2, ...
    input_filename = f"cleaned_data/cleanedcase{i}.txt"
    output_filename = f"cleaned_data/data_annotation/annotatedcase{i}.txt"

    with open(input_filename, "r", encoding="utf-8") as infile, \
         open(output_filename, "w", encoding="utf-8") as outfile:

        text = infile.read()
        annotated_text = annotate_text(text)
        outfile.write(annotated_text)

    print(f"Annotated {input_filename} and saved to {output_filename}")