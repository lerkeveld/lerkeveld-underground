# Root directory of website
root="<root>"

# Build
echo "[?] Building application ..."
npm run build
echo "[+] Built application."

# Copy to root
cp -r "build" "$root"
echo "[+] Copied to root: $root."
