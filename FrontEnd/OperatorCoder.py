values_dict = {}

while True:
    main_value = input("Enter a value for the first dropdown (or press q to quit): ")
    if main_value.lower() == "q":
        break

    sub_values = []
    while True:
        sub_value = input("Enter a subvalue for the second dropdown (or press q to quit): ")
        if sub_value.lower() == "q":
            break
        sub_values.append(sub_value)

    values_dict[main_value] = sorted(sub_values)

# Save to HTML file
with open("dropdowns.html", "w") as html_file:
    html_file.write("<html>\n")
    html_file.write("<body>\n")
    html_file.write("<select id='operatorDropdown' onchange='change_dropdown()'>\n")
    for main_value in sorted(values_dict.keys()):
        html_file.write(f"<option value='{main_value}'>{main_value}</option>\n")
    html_file.write("</select>\n")
    html_file.write("<select id='regionDropdown'>\n")
    html_file.write("</select>\n")
    html_file.write("<script>\n")
    html_file.write("function change_dropdown() {\n")
    html_file.write("var selectedValue = document.getElementById('operatorDropdown').value;\n")
    html_file.write("var regionDropdown = document.getElementById('regionDropdown');\n")
    html_file.write("regionDropdown.innerHTML = '';\n")
    for main_value in sorted(values_dict.keys()):
        html_file.write(f"if (selectedValue === '{main_value}') {{\n")
        for sub_value in values_dict[main_value]:
            html_file.write(f"var option = document.createElement('option');\n")
            html_file.write(f"option.value = '{sub_value}';\n")
            html_file.write(f"option.text = '{sub_value}';\n")
            html_file.write("regionDropdown.add(option);\n")
        html_file.write("}\n")
    html_file.write("}\n")
    html_file.write("</script>\n")
    html_file.write("</body>\n")
    html_file.write("</html>\n")

print("Values saved to dropdowns.html")
