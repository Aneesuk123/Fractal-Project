# Scan backend
Write-Host "Scanning backend..."
cd backend
trivy fs --ignore-unfixed --severity CRITICAL,HIGH,MEDIUM .
cd ..

# Scan frontend
Write-Host "Scanning frontend..."
cd frontend
trivy fs --ignore-unfixed --severity CRITICAL,HIGH,MEDIUM .
cd ..

# Always exit 0
exit 0
#anees