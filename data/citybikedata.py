# This is for the data validation. We go through all the files one by one.


import pandas as pd
from datetime import datetime

# Read the CSV file
data = pd.read_csv('2021-05.csv')

# Modify incorrect date values
for i in range(len(data)):
    if '/' in data.at[i, 'Departure_date']:
        date_str = data.at[i, 'Departure_date']
        try:
            date_obj = datetime.strptime(date_str, '%d/%m/%Y')
            data.at[i, 'Departure_date'] = date_obj.strftime('%Y-%m-%dT%H:%M:%S')
        except ValueError:
            data.at[i, 'Departure_date'] = None

# Remove all rows with NaN values
data = data.dropna()
data = data[(data['Covered_distance_m'] >= 10) & (data['Duration_sec'] >= 10)]

print (data)
# Save the modified CSV file
data.to_csv('2021-05-processed.csv', index=False)