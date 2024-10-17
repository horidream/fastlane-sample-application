# check if the file exists
if [ -f "../src/localhost.key" ]; then
    echo "File exists."
else
openssl genrsa -out ../src/localhost.key 2048
fi


# Generate a self-signed certificate (valid for 365 days)
openssl req -new -x509 -key ../src/localhost.key -out ../src/localhost.crt -days 365 \
-subj "/C=US/ST=California/L=San Francisco/O=My Company/OU=My Department/CN=localhost.paypal.com" \
-extensions v3_req \
-config <(cat <<-EOF
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
[req_distinguished_name]

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost.paypal.com
EOF
)

