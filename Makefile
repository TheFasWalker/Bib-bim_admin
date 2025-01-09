
chrome:
	google-chrome --user-data-dir="~/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

chromeOS:
	open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

chromeWin:
	chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials