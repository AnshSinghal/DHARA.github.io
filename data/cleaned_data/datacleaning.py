import os

def clean_text(text):
    # Lowercase the entire text
    text = text.lower()

    # Split the text into lines
    lines = text.splitlines()

    # Remove the first line if it exists
    if len(lines) > 0:
        lines = lines[1:]

    # Remove leading/trailing whitespace from each line and join
    cleaned_lines = [line.strip() for line in lines]
    cleaned_text = '\n'.join(cleaned_lines)

    return cleaned_text
# Process all case files
for i in range(1, 11):  # Assuming 400 files named case1, case2, ...
    input_filename = f"data/case{i}.txt"
    output_filename = f"cleaned_data/cleanedcase{i}.txt"

    with open(input_filename, "r", encoding="utf-8") as infile, \
         open(output_filename, "w", encoding="utf-8") as outfile:

        text = infile.read()
        cleaned_text = clean_text(text)
        outfile.write(cleaned_text)

    print(f"Cleaned {input_filename} and saved to {output_filename}")