<?php

function reg_form_registration_page() {
  return drupal_get_form('reg_form_registration');
}

function reg_form_registration($form, &$form_state) {
  $form = array();
  
  $form['identification'] = array(
    '#type' => 'fieldset',
    '#title' => t('Identification'),
  );

  $form['identification']['firstname'] = array(
    '#type' => 'textfield',
    '#title' => t('First name'),
  );

  $form['identification']['lastname'] = array(
    '#type' => 'textfield',
    '#title' => t('Last name'),
  );
  
  $form['identification']['organization'] = array(
    '#type' => 'textfield',
    '#title' => t('Organization'),
  );
  
  $form['identification']['email'] = array(
    '#type' => 'textfield',
    '#title' => t('email'),
  );
  $form['identification']['phone'] = array(
    '#type' => 'textfield',
    '#title' => t('phone'),
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
    '#description' => t('2015 Symposium Registration2'),
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
    form_set_error('choice', t('We are out of cake.'));
  }
}

function reg_form_registration_submit(&$form, &$form_state) {

  $form_state['redirect'] = '';
}

function reg_form_registration_unsure(&$form, &$form_state) {
  drupal_set_message(t('Make up your mind.'), 'warning');
}
