#converts all pngs, jpegs and jpgs in the current directory to webp

#convert pngs
for file in *.png
do
cwebp -q 80 "$file" -o "${file%.png}.webp"
done

#convert jpegs
for file in *.jpeg
do
cwebp -q 80 "$file" -o "${file%.jpeg}.webp"
done

#convert jpgs
for file in *.jpg
do
cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
