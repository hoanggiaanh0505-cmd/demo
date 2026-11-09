```
Docker Desktop là Frontend  End
Docker Demond là Back End

- IDE: Visual code bất kể
 - extension:
   - container tool
   - Docker 
   - Docker DX 
   - Github Action
   - JenkinsFile Support 
   - Cài Terminus ( Không bắt buộc): Gõ lệnh, quản lý đẹp đẹp
   - Lens: lenshq.io 
   - Cài Git 
   ```bash 
   git - v ```bash
# Tạo máy
docker run -d -it --name ubuntu-demo ubuntu:26.04

# Truy cập
docker exec -it ubuntu-demo bash

ls
ls -l

# -l: list danh sách
ls - la

# a: all, hiển thị cả những file ẩn (dấu chấm đằng trước)
# 1 dấu chấm là đi tới
# 2 dấu chấm là đi ra
# total 60

# drwxr-xr-x   1 root root 4096 Oct 11 13:19 .
# drwxr-xr-x   1 root root 4096 Oct 11 13:19 ..
# -rwxr-xr-x   1 root root    0 Oct 11 13:19 .dockerenv
# drwxr-xr-x   2 root root 4096 Sep 27 10:29 .rock
# lrwxrwxrwx   1 root root    7 Apr 20 08:46 bin -> usr/bin
# drwxr-xr-x   2 root root 4096 Apr 20 08:46 boot
# drwxr-xr-x   5 root root  360 Oct 11 13:19 dev
# drwxr-xr-x   1 root root 4096 Oct 11 13:19 etc
# drwxr-xr-x   3 root root 4096 Sep 27 10:29 home
# lrwxrwxrwx   1 root root    7 Apr 20 08:46 lib -> usr/lib
# drwxr-xr-x   2 root root 4096 Sep 27 10:27 media
# drwxr-xr-x   2 root root 4096 Sep 27 10:27 mnt
# drwxr-xr-x   2 root root 4096 Sep 27 10:27 opt
# dr-xr-xr-x 172 root root    0 Oct 11 13:19 proc
# drwx------   2 root root 4096 Sep 27 10:29 root
# drwxr-xr-x   4 root root 4096 Sep 27 10:29 run
# lrwxrwxrwx   1 root root    8 Apr 20 08:46 sbin -> usr/sbin
# drwxr-xr-x   2 root root 4096 Sep 27 10:27 srv
# dr-xr-xr-x  11 root root    0 Oct 12 21:27 sys
# drwxrwxrwt   2 root root 4096 Sep 27 10:28 tmp



cd
# cd là viết tắt củachange directory
cd boot

# ../ để lùi lại folder cha
# cd không quy định nơi tới chỉ gõ mỗi cd: tự thêm default "~"
# Dấu ngã ~ là thư mục hom/desktop 
# cd ~ và cd sẽ giống nhau
# ~ thư mục home/desktop của user hiện tại
# root là tài khoản của admin 


pwd 
# print working directory 
 
mkdir
# make directory
# tao folder/directory (duong dan)

rm -rf ten_file/folder
# remove: dùng để xóa folder hoặc file 
#  -r: recursive: xóa thư mục và toàn bộ file/thư mục bên trong
#  -f: force: ép xóa, không cần hỏi xác nhận, và bỏ qua lỗi file không tồn tại 

# if [ "$BASH" ]; then
#     if [ -f ~/.bashrc ]; then
# 	. ~/.bashrc
#     fi
# fi

# cat vim nano đều có những giao diện riêng của nó. Vim xịn nhất , nano ít xài, cat dễ đọc
cat, vim, nano
# công cụ edito

cp
# coppy
# coppy có hai loại
# coppy file
# coppy thư mục 
cp -r ten_file_a ten_file_moi

# -r: recursive coppy toan bo thu muc con và file ben trong

mv
# move
# dung de di chuyen hoac doi ten file/folder
mv ten_file/folder_c tenfile/folder mới

# . cham la tuong doi
# / la tuyet doi

find noi_bat_dau --name *.config
# tim kiem file/folder

df -h
# disk free : coi dung luong cua he thong
# -h: human-readable hien thi de doc hon

du -sh *
# disk useage 
# -s: summary

free -h
# Theo doi RAM


top -h

# thuong se co phan mem htop 
# Nhan phim "m" chuyen doi giao dien xem RAM

kill number_PID
# tat dang hoang, tuan tu

kill -9 number_PID

# ep buoc kill

apt update
apt install vim
# cai dat
apt update || apt install vim

apt update && apt install vim

# chon y chon 5 chon 29
# yes | khu vuc Asian| mui gio vietnam

vim TEN_FILE
:wq
# w: write (save) 
# q: quit

# EC2 AWS

!! 
vim index.jsx

:wq 
# Thoát file và lưu lại 

:x # Tương tự

:q! 
# Thoát file không lưu

:q 
#Thoát vim

# Cách xóa toàn file trỏ chuột vào ký từ đầu tiên của dòng đầu tiên sau đó bấm chữ d

# Xóa nhanh tất cả
gg
dG

# Đưa trỏ chuột lên trên đầu và xóa tất cả đằng sau trỏ chuột


```


