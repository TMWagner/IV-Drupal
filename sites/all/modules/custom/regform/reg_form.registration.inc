<?php

function reg_form_registration_page() {
  return drupal_get_form('reg_form_registration');
}

function reg_form_registration($form, &$form_state) {
  drupal_add_css(drupal_get_path('module', 'reg_form') . '/css/regform.css');
  $form = array();
  
  $form['identification'] = array(
    '#type' => 'fieldset',
    '#title' => t('Identification'),
  );

  $form['identification']['firstname'] = array(
    '#type' => 'textfield',
    '#title' => t('First name'),
    '#size' => 20,
    '#maxlength' => 60,
  );

  $form['identification']['lastname'] = array(
    '#type' => 'textfield',
    '#title' => t('Last name'),
    '#size' => 20,
    '#maxlength' => 60,
    '#required' => TRUE,
  );
  
  
  $form['identification']['email'] = array(
    '#type' => 'textfield',
    '#title' => t('email'),
    '#size' => 20,
    '#maxlength' => 60,
  );
  $form['identification']['phone'] = array(
    '#type' => 'textfield',
    '#title' => t('phone'),
    '#size' => 20,
    '#maxlength' => 60,
  );
  
  $form['identification']['organization'] = array(
    '#type' => 'textfield',
    '#title' => t('Organization'),
  );  
  
  
  $form['sessions'] = array(
    '#type' => 'fieldset',
    '#title' => t('Sessions'),
  );
  
 $form['sessions']['select1'] = array(
  '#type' => 'checkboxes',
  '#options' => drupal_map_assoc(array(t('Monday'), t('Tuesday'))),
  '#title' => t('Select session?'),
  );


  

  $form['choice'] = array(
    '#type' => 'select',
    //'#title' => t('2015 Symposium Registration (title)'),
    '#description' => t('2015 Symposium Registration 2'),
    '#options' => array(
      'cake' => t('Cake please'),
      'pie' => t('Pie I guess'),
    ),
    '#default_value' => 'cake',
    '#required' => TRUE,
  );

  $form['buttons']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Submit'),
  );
  $form['buttons']['unsure'] = array(
    '#type' => 'submit',
    '#value' => t('Reset'),
    '#submit' => array('reg_form_registration_unsure'),
    '#validate' => array(),
  );

  return $form;
}

function reg_form_registration_validate(&$form, &$form_state) {
  if ($form_state['values']['choice'] == 'cake') {
    // Force an error and redisplay the form...
    form_set_error('choice', t('We are out of cake.'));
  }
}

function reg_form_registration_submit(&$form, &$form_state) {
  
  $debug_form = $form;
  $form_state['redirect'] = '';
}

function reg_form_registration_unsure(&$form, &$form_state) {
  drupal_set_message(t('Make up your mind.'), 'warning');
}








/**
 * Mail page 1
 */
function reg_form_registration_sendmail() {
  global $language;
  $to = 'tmw100@gmail.com';
  
  // Send the mail
  drupal_mail('reg_form_registration', 'page1', $to, $language->language, $params = array(), $from = NULL, $send = TRUE);
  
  return '';
}

///**
// * Mail page 2
// */
//function example_page2() {
//  global $language;
//
//  // Send the mail
//  drupal_mail('example', 'page2', 'MAILADDRESS', $language->language);
//  
//  return '';
//}
 
/**
 * Implements hook_mail().
 */
function reg_form_registration_mail($key, &$message, $params) {
  if ($key == 'page1') {
    $message['subject'] = t('Page 1');

    // This can also be a theme function with full html page structure
    $message['body'][] = drupal_html_to_text('<p>Your content for page 1</p>'); 
  } else if ($key == 'page2') {
    $message['subject'] = t('Page 2');

    // This can also be a theme function with full html page structure
    $message['body'][] = drupal_html_to_text('<p>Your content for page 2</p>'); 
  }
}
