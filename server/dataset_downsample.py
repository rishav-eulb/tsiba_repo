import pandas as pd 

num_samples = 7000
file_path = 'dataset.csv'

# Read the CSV file into a Pandas DataFrame
df = pd.read_csv(file_path)
data_length = len(df)
df_ds = pd.DataFrame(columns=['Timestamp', 'profit'])

prev_month = df.iloc[0]['Timestamp'][3:5]
same_month_prof_sum = 0
num_same_months = 0
row_index = 0
for index, row in df.iterrows():
    curr_month = row['Timestamp'][3:5]
    curr_year = row['Timestamp'][6:10]
    if curr_month == prev_month:
        same_month_prof_sum += row['profit']
        num_same_months += 1
    else:
        avg_profit = int(same_month_prof_sum / num_same_months)
        time_stamp = prev_month
        new_row = {'Timestamp': curr_month + '-' + curr_year, 'profit':avg_profit}
        df_ds.loc[row_index] = new_row
        row_index += 1
        prev_month = curr_month
        same_month_prof_sum = 0
        num_same_months = 0

df_ds.to_csv('dataset_ds.csv', index = False)