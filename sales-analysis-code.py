import pandas as pd
import numpy as np
from datetime import datetime

# Read the Excel file
def analyze_sales_data(file_path):
    # Read Excel file
    df = pd.read_excel(file_path)
    
    # 1. Overall Summary Analysis
    overall_summary = pd.DataFrame({
        'Metric': ['Total Sales', 'Total Profit', 'Average Discount', 'Profit Margin %'],
        'Value': [
            df['Sales Amount'].sum(),
            df['Profit'].sum(),
            df['Discount'].mean(),
            (df['Profit'].sum() / df['Sales Amount'].sum()) * 100
        ]
    })
    overall_summary.to_csv('overall_summary.csv', index=False)
    
    # 2. Monthly Sales Trends
    df['Month'] = pd.to_datetime(df['Sales Date']).dt.strftime('%Y-%m')
    monthly_trends = df.groupby('Month').agg({
        'Sales Amount': 'sum',
        'Profit': 'sum',
        'Discount': 'sum'
    }).reset_index()
    monthly_trends['Profit Margin %'] = (monthly_trends['Profit'] / monthly_trends['Sales Amount']) * 100
    monthly_trends.to_csv('monthly_trends.csv', index=False)
    
    # 3. Regional Analysis
    regional_analysis = df.groupby('Region').agg({
        'Sales Amount': 'sum',
        'Profit': 'sum',
        'Discount': 'sum'
    }).reset_index()
    regional_analysis['Profit Margin %'] = (regional_analysis['Profit'] / regional_analysis['Sales Amount']) * 100
    regional_analysis.to_csv('regional_analysis.csv', index=False)
    
    # 4. Customer Analysis
    customer_analysis = df.groupby('Customer Name').agg({
        'Sales Amount': ['sum', 'count'],
        'Profit': 'sum',
        'Discount': ['sum', 'mean']
    }).reset_index()
    customer_analysis.columns = ['Customer Name', 'Total Sales', 'Transaction Count', 
                               'Total Profit', 'Total Discount', 'Average Discount']
    customer_analysis['Profit Margin %'] = (customer_analysis['Total Profit'] / customer_analysis['Total Sales']) * 100
    customer_analysis.to_csv('customer_analysis.csv', index=False)
    
    # 5. Product Category Analysis
    product_analysis = df.groupby('Product Category').agg({
        'Sales Amount': ['sum', 'count'],
        'Profit': 'sum',
        'Discount': ['sum', 'mean']
    }).reset_index()
    product_analysis.columns = ['Product Category', 'Total Sales', 'Transaction Count',
                              'Total Profit', 'Total Discount', 'Average Discount']
    product_analysis['Profit Margin %'] = (product_analysis['Total Profit'] / product_analysis['Total Sales']) * 100
    product_analysis.to_csv('product_analysis.csv', index=False)
    
    # 6. Top Performers
    # Top 10 customers by sales
    top_sales = customer_analysis.nlargest(10, 'Total Sales')
    top_sales.to_csv('top_10_customers_by_sales.csv', index=False)
    
    # Top 10 customers by profit
    top_profit = customer_analysis.nlargest(10, 'Total Profit')
    top_profit.to_csv('top_10_customers_by_profit.csv', index=False)
    
    # 7. Time-based Analysis
    df['Year'] = pd.to_datetime(df['Sales Date']).dt.year
    yearly_analysis = df.groupby('Year').agg({
        'Sales Amount': 'sum',
        'Profit': 'sum',
        'Discount': ['sum', 'mean']
    }).reset_index()
    yearly_analysis.columns = ['Year', 'Total Sales', 'Total Profit', 
                             'Total Discount', 'Average Discount']
    yearly_analysis['Profit Margin %'] = (yearly_analysis['Total Profit'] / yearly_analysis['Total Sales']) * 100
    yearly_analysis.to_csv('yearly_analysis.csv', index=False)

# Usage
if __name__ == "__main__":
    analyze_sales_data('Sales_Analysis_Dataset.xlsx')
