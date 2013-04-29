<?php
/*
Uploadify v2.1.0
Release Date: August 24, 2009

Copyright (c) 2009 Ronnie Garcia, Travis Nickels

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

$path_to_modx_config = '../../../manager/includes/config.inc.php';

include_once($path_to_modx_config);
startCMSSession();

include_once "../../../manager/includes/document.parser.class.inc.php";
$modx = new DocumentParser;
$modx->loadExtension("ManagerAPI");
$modx->getSettings();

$fileArray = array();
foreach ($_POST as $key => $value) {
	if ($key != 'folder') {
		$target_fname = $value;
		if($modx->config['clean_uploaded_filename']) {
			$nameparts = explode('.', $target_fname);
			$nameparts = array_map(array($modx, 'stripAlias'), $nameparts);
			$target_fname = implode('.', $nameparts);
		}
		if (file_exists($_SERVER['DOCUMENT_ROOT'] . $_POST['folder'] . '/' . $target_fname)) {
			$fileArray[$key] = $value;
		}
	}
}
echo json_encode($fileArray);
?>