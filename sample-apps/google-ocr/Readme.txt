# https://cloud.google.com/vision/docs/quickstart-client-libraries
# Export the path to API credentials file
export GOOGLE_APPLICATION_CREDENTIALS=/Users/neeraj/Projects/Webapps/Document-Analyzer/sample-apps/google-ocr/api-key.json
# Following command should work. We need to install sdk as shown below
gcloud auth application-default print-access-token

# For command line
# https://cloud.google.com/vision/docs/quickstart-cli
# https://cloud.google.com/sdk/docs/
wget https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-253.0.0-darwin-x86_64.tar.gz
tar -zxf google-cloud-sdk-253.0.0-darwin-x86_64.tar.gz 
./google-cloud-sdk/install.sh 

