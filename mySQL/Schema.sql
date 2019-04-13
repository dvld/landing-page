CREATE DATABASE superAffiliateSystemLeads;
USE DATABASE superAffiliateSystemLeads;

CREATE TABLE leads (
  leadId INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (leadId)
);