

#echo "Enter the YouTube URL: "
#read URL
#echo "Enter the directory: "
#read dir
cd /var/www/chrisedwards.tech/youtube/
rm log
touch log

echo "$1 $2 $3" > /var/www/chrisedwards.tech/youtube/log

if [ "$3" = "--extract-audio" ]; then
                mkdir -p $2
                chmod 777 $2
                cd $2
                youtube-dl $1  --extract-audio  --audio-format mp3 --audio-quality 0 --proxy socks5://x9107481:zJnGLnYgAe@proxy-nl.privateinternetaccess.com:1080/ >  log
            else

                mkdir -p $2
                chmod 777 $2
                cd $2
                youtube-dl $1 -f mp4 --proxy socks5://x9107481:zJnGLnYgAe@proxy-nl.privateinternetaccess.com:1080/ > log
            fi
chmod 777 *

#youtube-dl $1  $2 --audio-format mp3 --audio-quality 0

#https:///i99FdFpifFQyoutu.be

