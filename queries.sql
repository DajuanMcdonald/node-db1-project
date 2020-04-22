-- Database Queries

-- Find all customers with postal code 1010
SELECT * FROM Customer WHERE PostalCode = '1010';

-- Find the phone number for the supplier with the id 11
SELECT Phone FROM Supplier WHERE id = '11';

-- List first 10 orders placed, sorted descending by the order date
SELECT * from 'Order' ORDER BY OrderDate DESC, OrderDate LIMIT 10; 
SELECT * FROM 'Order' ORDER BY OrderDate DESC LIMIT 10;

-- Find all customers that live in London, Madrid, or Brazil
SELECT ShipName FROM 'Order' WHERE ShipCity ='London' OR ShipCity = 'Madrid' OR ShipCity = 'Brazil' ;

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO Customer (CompanyName, ContactName, Address, City, PostalCode, Country)
VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');
-- TEST (SELECT * FROM Customer WHERE CompanyName = 'The Shire';)

-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customer SET PostalCode = 11122 WHERE ContactName = 'Bilbo Baggins'; 

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT DISTINCT City FROM Customer;
-- OR SELECT DISTINCT City FROM Customer ORDER BY City ASC;
-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT ContactName FROM Supplier WHERE length(ContactName) > 20 ;